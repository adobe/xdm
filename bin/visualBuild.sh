echo "triggering visual build..."
git clone https://jwen-adobe:3e36f0ce62fc84de8553fe9410edcdfb59f000a8@github.com/adobe/xdmVisualization.git
cd xdmVisualization
git remote add origin https://jwen-adobe:3e36f0ce62fc84de8553fe9410edcdfb59f000a8@github.com/adobe/xdmVisualization.git
echo "triggered" > triggeredBuild.log
currentBranch=$(git status|grep "On branch"|cut -c11-100)
echo $currentBranch
git add .
git commit -m "trigger a visualization build for master branch"
git push origin
cd ..
rm -rf xdmVisualization