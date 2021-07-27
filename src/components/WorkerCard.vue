<template>
    <div class="cardWrapper">
        <!--<p>Фамилия: {{workerInf.firstName}}</p>
        <p>Имя: {{workerInf.name}}</p>
        <p>Табельный номер: {{workerInf.id}}</p>
        <p>Мобильный телефон: {{workerInf.phone}}</p>
        <p>Отдел: {{workerInf.departament}}</p>-->
    </div>
</template>

<script>
export default {
    props: {
        workerInf: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.cardWrapper {
   
    border: 1px solid #d8d8d8;
    width: 45%;
    height: 200px;
    margin-right: calc(2.5% - 2px);
    margin-left: calc(2.5% - 2px);
    margin-bottom: 1vh;
}
</style>