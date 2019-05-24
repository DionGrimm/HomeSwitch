<template>
<div class="mdl-layout__content whiteBg">
	<div id="wrap">
		<ul class="mdl-list">
			<li class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
					<span>Altijd aan</span>
					<span>92 KwH</span>

					<label id="label-3" class="mdl-switch mdl-js-switch">
						<input type="checkbox" class="mdl-switch__input" checked disabled>
						<span class="mdl-switch__label"></span>
					</label>
				</span>
			</li>
			<li class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
					<span>Verlichting</span>
					<span>14 KwH</span>

					<label id="label-1" class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-1">
						<input type="checkbox" id="switch-1" class="mdl-switch__input" checked>
						<span class="mdl-switch__label"></span>
					</label>
				</span>
			</li>
			<li class="mdl-list__item">
				<span class="mdl-list__item-primary-content">
					<span>Overig</span>
					<span>38 KwH</span>

					<label id="label-2" class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-2">
						<input type="checkbox" id="switch-2" class="mdl-switch__input" checked>
						<span class="mdl-switch__label"></span>
					</label>
				</span>
			</li>
		</ul>
	</div>

	<script type="application/javascript">
		setTimeout(function () {
			try {
				componentHandler.upgradeElement(document.getElementById("label-1"))
				componentHandler.upgradeElement(document.getElementById("label-2"))
				componentHandler.upgradeElement(document.getElementById("label-3"))
			} catch (e) {}
		}, 10)
	</script>
</div>
</template>
<script>
export default {}
</script>
<style scoped>
body {
	background-color: white !important;
}

.mdl-list {
	margin: 0;
	padding: 0;
}

.mdl-list__item-primary-content {
	display: flex;
}

.mdl-list__item-primary-content > span:first-child {
	width: 115px;
}

.mdl-list__item-primary-content > span:nth-child(2) {
	flex-grow: 1;
	color: #777;
}

.mdl-switch {
	padding-right: 8px;
	width: auto;
}
</style>
