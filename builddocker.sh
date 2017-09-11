sh builddist.sh
dateVersion=$(date +"%Y%m%d")
imageName="your_image_name"
docker build -t $imageName:$dateVersion .
docker push $imageName:$dateVersion