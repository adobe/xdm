echo "triggering visual build..."
git clone https://jwen-adobe:c831bac94b7bd842c7a7fe7c5ab115db4635d888@github.com/adobe/xdmVisualization.git
cd xdmVisualization
#git remote set-url origin https://jwen-adobe:c831bac94b7bd842c7a7fe7c5ab115db4635d888@github.com/adobe/xdmVisualization.git
echo "triggered" > triggeredBuild.log
currentBranch=$(git status|grep "On branch"|cut -c11-100)
echo $currentBranch
git add .
git commit -m "trigger a visualization build for master branch"
git push origin
cd ..
rm -rf xdmVisualization