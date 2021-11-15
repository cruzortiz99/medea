rm -r server/assets/app
cd web && npm run build
cd ..
cp -r web/build server/assets/app
