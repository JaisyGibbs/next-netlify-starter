import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html>
      <head>
        <meta charset="utf-8">
        <title>A-Frame Mixamo FBX Animation Example</title>
        <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
        <script src="https://cdn.rawgit.com/donmccurdy/aframe-extras/v6.1.3/dist/aframe-extras.min.js"></script>
        <script src="https://unpkg.com/aframe-animation-component/dist/aframe-animation-component.min.js"></script>
      </head>
      <body>
        <a-scene>
          <a-assets>
            <a-asset-item id="walking" src="https://melodic-melba-d4f963.netlify.app/Walking.fbx"></a-asset-item>
          </a-assets>
          <a-entity
            position="0 0 -5"
            scale="0.1 0.1 0.1"
            animation-mixer="clip: Walking; loop: repeat">
            <a-entity
              gltf-model="#walking"
              scale="1 1 1"
              position="0 0 0">
            </a-entity>
          </a-entity>
        </a-scene>
      </body>
    </html>
  )
}
