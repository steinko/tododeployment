echo "Travis push job"

# Download dependencies and build
npm install
npm run build

# Update the stack
case ${TRAVIS_BRANCH} in
    master)
        pulumi stack select dev
        pulumi up --yes
        ;;
    production)
        pulumi stack select acme/website-production
        pulumi up --yes
        ;;
    *)
        echo "No Pulumi stack associated with branch ${TRAVIS_BRANCH}."
        ;;
esac