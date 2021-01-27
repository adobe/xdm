echo "Visual build."
git clone https://github.com/adobe/xdmVisualization.git
cd xdmVisualization
bundle init
bundle install
npm install -g grunt-cli
npm install
pwd
./scripts/xdmVisual4Git.sh master

