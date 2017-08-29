sh builddist.sh
dateVersion=$(date +"%Y%m%d")
docker build -t tranbatungbk/angular2-cli-starter:$dateVersion .
docker push tranbatungbk/angular2-cli-starter:$dateVersion