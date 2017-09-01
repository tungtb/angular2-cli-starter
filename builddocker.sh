sh builddist.sh
dateVersion=$(date +"%Y%m%d")
docker build -t tungtb/angular2-cli-starter:$dateVersion .
docker push tungtb/angular2-cli-starter:$dateVersion