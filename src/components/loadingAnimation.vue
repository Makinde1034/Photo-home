<template>
    <div class="wrap">
        <div class="big"></div>
        <div class="small"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

$anim_color : #e1d7d7;
.wrap{
    height: 30px;
    width: 100px;
    position: absolute;
    bottom: 10px;
}

.big{
    width: 100%;
    height: 10px;
    background: $anim_color;
    margin-bottom: 5px;
     animation: pop 1s forwards infinite alternate;
}

.small{
    width: 80%;
    height: 10px;
    background: $anim_color;
    animation: pop 0.8s forwards infinite alternate;
}

@keyframes pop {
    0%{
		opacity: .2;
		transform: translateY(6px) scale(0.98);
    }
     100%{
		opacity: .6;
		transform: translateY(0px) scale(1);
	}

}
</style>