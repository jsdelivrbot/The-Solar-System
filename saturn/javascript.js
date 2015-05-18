(function() {
    var webglEl = document.getElementById('webgl');
    if (!Detector.webgl) {
        Detector.addGetWebGLMessage(webglEl);
        return;
    }


    THREE.ImageUtils.crossOrigin = '';
    var width = window.innerWidth,
        height = window.innerHeight;
    var radius = 0.45,
        segments = 32,
        rotation = 5;


    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
    camera.position.z = 3;
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    scene.add(new THREE.AmbientLight(0x553333));

    var light = new THREE.DirectionalLight(0xffffff, .5);
    light.position.set(5, 3, 5);
    scene.add(light);

    var sphere = createSphere(radius, segments);
    sphere.rotation.y = rotation;
    scene.add(sphere);
    
    var rings = createRings(radius, segments);
    rings.rotation.y = rotation;

    scene.add(rings);


    var stars = createStars(90, 64);
    scene.add(stars);
    var controls = new THREE.TrackballControls(camera);
    webglEl.appendChild(renderer.domElement);
    render();

    var planetAxis = new THREE.Vector3( Math.sin( radians ), Math.cos( radians ), 0 ).normalize();
    var radians = 23.4 * Math.PI / 180; // tilt in radians
    
    function render() {
        controls.update();
        sphere.rotation.y += 0.05;
        rings.rotation.y += 0.05;
        sphere.geometry.applyMatrix( new THREE.Matrix4().makeRotationZ( - radians ) );
        sphere.rotateOnAxis( earthAxis, 0.01 );
        
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }

    function createSphere(radius, segments) {
        return new THREE.Mesh(new THREE.SphereGeometry(radius, segments, segments), new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture('https://cdn.rawgit.com/marvindanig/Images/master/jupiter/jupitermap.jpg'),
            bumpScale: 0.05,
            specular: new THREE.Color('#190909')
        }));
    }

    function createRings(radius, segments) {
        return new THREE.Mesh(new THREE.XRingGeometry(1.2 * radius, 2 * radius, 2 * segments, 5, 0, Math.PI * 2), new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('https://cdn.rawgit.com/marvindanig/Images/master/jupiter/jupitermap.jpg'),
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.4, 
        }));
    }

    function createStars(radius, segments) {
        return new THREE.Mesh(new THREE.SphereGeometry(radius, segments, segments), new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('https://cdn.rawgit.com/marvindanig/Images/master/galaxy_starfield.png'),
            side: THREE.BackSide
        }));
    }

}());