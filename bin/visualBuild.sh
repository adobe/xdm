echo "triggering visual build"
git clone https://github.com/adobe/xdmVisualization.git
cd xdmVisualization
echo "triggered" > triggeredBuild.log
currentBranch=$(git status|grep "On branch"|cut -c11-100)
echo $currentBranch
echo "git add"
git add .
echo "git commit"
git commit -m "trigger a visualization build for master branch"
echo "git push"
git push --set-upstream origin $currentBranch
cd ..
rm -rf xdmVisualization