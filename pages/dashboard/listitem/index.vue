<template>
    <div id="main">
        <div class="container">
            <div style="margin-top: 2rem; padding-bottom: 1rem;"><h1>Make Bootstrap Sexy Again</h1></div>
            <!-- Alerts -->
            <h2>Alerts</h2>
            <div style="padding: 1rem;">
                <div v-for="(brand, abc) in ['success', 'info', 'warning', 'danger']" :key="abc" class="alert" :class="'alert-' + brand">
                    <strong>Well done!</strong> You successfully read this {{brand}} alert message.
                </div>
            </div>
            <h2>Breadcrumb</h2>
            <div style="padding: 1rem;">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                    <li class="breadcrumb-item active">Data</li>
                </ol>
            </div>
            <!-- Buttons-->
            <h2>Buttons</h2>
            <div style="padding: 1rem;">
                <div v-for="(typeB, index) in ['', 'outline']" :key="index">
                    <span v-for="(brand, indexBrand) in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']" :key="indexBrand">
                        <button role="button" class="btn" :class="'btn-' + (typeB.length ? (typeB + '-') : '') + indexBrand" style="margin-bottom: 1rem; margin-right: 1rem;">
                            {{indexBrand}} {{index}}
                        </button>
                    </span>
                </div>
            </div>
            <h2>Modal</h2>
            <modal-common></modal-common>
        </div>
    </div>
</template>

<script>
import ModalCommon from '@@/components/Modal.vue'
export default {
    middleware: 'authenticated',
    components: {
        ModalCommon
    }
}
</script>

<style lang="scss">
@import '@@/assets/custom-bootstrap.scss';
@import '@@/node_modules/bootstrap/scss/bootstrap.scss';
</style>
