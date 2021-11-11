rm -r server/assets
cd web && npm run build
cd ..
cp -r web/build server/assets
