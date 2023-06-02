import React from 'react'

export const Suscripcion = () => {
    return (
        <div class="container-fluid bg-secondary my-5">
            <div class="row justify-content-md-center py-5 px-xl-5">
                <div class="col-md-6 col-12 py-5">
                    <div class="text-center mb-2 pb-2">
                        <h2 class="section-title px-5 mb-3"><span class="bg-secondary px-2">Entérate de lo último en Artesanías</span></h2>
                        <p>Suscríbete a nuestro boletín semanal</p>
                    </div>
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control border-white p-4" placeholder="Correo Electronico"/>
                                <div class="input-group-append">
                                    <button class="btn btn-primary px-4">Subscribete</button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
