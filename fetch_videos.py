import os
import json
import requests
from pathlib import Path

API_KEY = os.environ.get("YOUTUBE_API_KEY")
CHANNEL_ID = os.environ.get("CHANNEL_ID")

OUTPUT_JSON = Path("public/data/videos.json")
THUMBS_DIR = Path("images/thumbs")
FULLS_DIR = Path("images/fulls")

OUTPUT_JSON.parent.mkdir(exist_ok=True)
THUMBS_DIR.mkdir(parents=True, exist_ok=True)
FULLS_DIR.mkdir(parents=True, exist_ok=True)

# Get uploads playlist ID
def get_uploads_playlist_id():
    url = "https://www.googleapis.com/youtube/v3/channels"
    params = {
        "part": "contentDetails",
        "id": CHANNEL_ID,
        "key": API_KEY
    }
    res = requests.get(url, params=params)
    data = res.json()
    print(data)
    return data["items"][0]["contentDetails"]["relatedPlaylists"]["uploads"]

# Fetch all videos from uploads playlist
def fetch_all_videos(playlist_id):
    videos = []
    url = "https://www.googleapis.com/youtube/v3/playlistItems"

    next_page = None

    while True:
        params = {
            "part": "snippet",
            "playlistId": playlist_id,
            "maxResults": 50,
            "key": API_KEY
        }
        if next_page:
            params["pageToken"] = next_page

        res = requests.get(url, params=params)
        data = res.json()

        for item in data["items"]:
            sn = item["snippet"]
            video_id = sn["resourceId"]["videoId"]

            # Extract correct thumbnail URLs
            medium_url = sn["thumbnails"]["medium"]["url"]
            maxres_url = sn["thumbnails"].get("maxres", sn["thumbnails"]["high"])["url"]

            # Download medium thumbnail
            thumb_img = requests.get(medium_url).content
            with open(THUMBS_DIR / f"{video_id}.jpg", "wb") as f:
                f.write(thumb_img)

            # Download maxres full image
            full_img = requests.get(maxres_url).content
            with open(FULLS_DIR / f"{video_id}.jpg", "wb") as f:
                f.write(full_img)

            # Append metadata
            videos.append({
                "id": video_id,
                "title": sn.get("title"),
                "description": sn.get("description"),
                "publishedAt": sn.get("publishedAt"),
                "thumbnail": f"images/thumbs/{video_id}.jpg",
                "fullImage": f"images/fulls/{video_id}.jpg"
            })

        next_page = data.get("nextPageToken")
        if not next_page:
            break

    return videos

def main():
    playlist_id = get_uploads_playlist_id()
    videos = fetch_all_videos(playlist_id)

    with open(OUTPUT_JSON, "w") as f:
        json.dump(videos, f, indent=2)

    print(f"Saved {len(videos)} videos.")
    print("Done.")

if __name__ == "__main__":
    main()
