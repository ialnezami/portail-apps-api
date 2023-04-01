# require cli already installed : 
# npm i -g @nestjs/cli


projectName="skoazell-api"
# list services's name
services=( "category" "item" "user" "config"  )

cd $projectName 
// skipt test
nest new . --package-manager npm --skip-git
for service in "${services[@]}"
do  
    cd src
    // rest api and crud
    nest g resource $service --no-spec
    cd ..
done
