echo "triggering visual build"
gh repo clone adobe/xdmVisualization
cd xdmVisualization
echo "triggered" > triggeredBuild.log
currentBranch=$(git status|grep "On branch"|cut -c11-100)
echo $currentBranch
git add .
git commit -m "trigger a visualization build for master branch"
git push origin
cd ..
rm -rf xdmVisualization