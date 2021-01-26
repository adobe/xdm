echo "triggering visual build"
git clone https://github.com/adobe/xdmVisualization.git
cd xdmVisualization
echo "triggered" > triggeredBuild.log
currentBranch=$(git status|grep "On branch"|cut -c11-100)
echo $currentBranch
git config --global user.email "jwen@adobe.com"
git config --global user.name "jwen@adobe.com"
git add .
git commit -m "trigger a visualization build for master branch"
git push --set-upstream origin $currentBranch

cd ..
rm -rf xdmVisualization