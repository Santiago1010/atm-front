<template>
	<div class="landingContainer">
		<q-img src="../assets/images/logos/typ.png"></q-img>
		<div class="circle" id="firstCircle"></div>
		<div class="circle" id="secondCircle"></div>
		<div class="circle" id="thirdCircle"></div>
		<div class="circle" id="fourthCircle"></div>
		<div class="circle" id="fifthCircle"></div>
		<div class="circle" id="sixCircle"></div>
	</div>
</template>

<script setup>
	import { onMounted } from 'vue'
	import { gsap } from 'gsap'

	const animateBands = () => {
		let tl = gsap.timeline({repeat: 0, repeatDelay: 1});

		tl.to('#firstCircle', {
			width: 0,
			height: 0,
			duration: 1
		})

		tl.to('#secondCircle', {
			width: 0,
			height: 0,
			duration: 1
		})

		tl.to('#thirdCircle', {
			width: 0,
			height: 0,
			duration: 1
		})

		tl.to('#fourthCircle', {
			width: 0,
			height: 0,
			duration: 1
		})

		tl.to('#fifthCircle', {
			width: 0,
			height: 0,
			duration: 1
		})

		tl.to('#sixCircle', {
			width: 0,
			height: 0,
			duration: 1
		})

		tl.to('.circle', {
			display: 'none'
		})

		tl.to('#logo', {
			x: 1,
			y: 1,
			maxWidth: 10
		})
	}

	onMounted(() => {
		animateBands()
	})
</script>

<style scoped>
	.landingContainer {
		min-height: 100vh;
		min-width: 100%;
		padding: 1em;
	}

	.circle {
		position: absolute;
		width: 350px;
		height: 350px;
		border-radius: 50%;
		display: inline;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.circle:nth-child(2) {
		border: 4px solid yellow;
	}

	.circle:nth-child(3) {
		border: 4px solid red;
	}

	.circle:nth-child(4) {
		border: 4px solid blue;
	}

	.circle:nth-child(5) {
		border: 4px solid cyan;
	}

	.circle:nth-child(6) {
		border: 4px solid black;
	}

	.circle:nth-child(7) {
		border: 4px solid brown;
	}
</style>