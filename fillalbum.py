import os
import json

os.chdir('trianglemom')

json_path = './src/pages/album/Album.json'
image_path = './public/images/album'

with open(json_path) as j:
    image_json = json.load(j)

included_images = [img['src'].split('/')[-1] for img in image_json["images"]]

for image in os.listdir(image_path):
    if image not in included_images:
        image_dict = {
            "src": f"./images/album/{image}",
            "width": 1,
            "height": 1
        }
        image_json["images"].append(image_dict)

with open(json_path, 'w', encoding='utf-8') as j:
    json.dump(image_json, j, ensure_ascii=False, indent=4)