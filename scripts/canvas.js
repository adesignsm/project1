var scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer(scene, camera);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnable = true;
renderer.setClearColor(new THREE.Color(0xffffff, 1));

document.getElementById("gallery-container").appendChild(renderer.domElement);

window.addEventListener("resize", function() {

	var width = window.innerWidth;
	var height = window.innerHeight;

	renderer.setSize(width, height);

	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableKeys = true;

camera.position.set(.3, 0, 11);

var wallGeo = new THREE.PlaneGeometry(14, 8, 5);
var floorGeo = new THREE.PlaneGeometry(15, 15, 5);
var cielingGeo = new THREE.PlaneGeometry(15, 15, 5);

var wallMaterial1 = new THREE.MeshBasicMaterial({color: 0x000000, side: THREE.DoubleSide});
var wallMaterial2 = new THREE.MeshBasicMaterial({color: 0x000000, side: THREE.DoubleSide});
var wallMaterial3 = new THREE.MeshBasicMaterial({color: 0x000000, side: THREE.DoubleSide});

var floorMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, side: THREE.DoubleSide});
var cielingMaterial = new THREE.MeshBasicMaterial({color: 0xd8d8d8, side: THREE.DoubleSide});

var wall1 = new THREE.Mesh(wallGeo, wallMaterial1);
var wall2 = new THREE.Mesh(wallGeo, wallMaterial2);
var wall3 = new THREE.Mesh(wallGeo, wallMaterial3);

scene.add(wall1, wall2, wall3);

var floor = new THREE.Mesh(floorGeo, floorMaterial);
scene.add(floor);

var cieling = new THREE.Mesh(cielingGeo, cielingMaterial);
scene.add(cieling);

var update = function() {

	wall1.position.x = "-6.1";
	wall1.position.y = 1.5;
	wall1.rotation.y = 11;

	wall2.position.x = 0;
	wall2.position.y = 1.5;
	wall2.position.z = "-7";
	wall2.rotation.y = 0;

	wall3.position.x = 7;
	wall3.position.y = 1.5;
	wall3.rotation.y = 11;

	floor.position.z = "-1";
	floor.position.y = "-2.4";
	floor.rotation.x = 4.72;

	cieling.position.z = "-1";
	cieling.position.y = 5.4;
	cieling.rotation.x = 4.72;

};

var render = function() {

	renderer.render(scene, camera);
};

var GameLoop = function() {

	requestAnimationFrame(GameLoop);

	update();
	render();
};

GameLoop();