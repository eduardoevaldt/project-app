function Contact() {
    return (
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <h1><b>Contato</b></h1>
                <form action="">
                    <div class="mb-3 mt-3">
                        <label for="name" class="form-label">Nome:</label>
                        <input type="text" class="form-control" id="email" placeholder="Digite seu nome" name="name" />
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Digite seu email" name="email" />
                    </div>
                    <label for="comment">O que deseja conosco?</label>
                    <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                    <button type="submit" class="btn btn-dark mb-3 mt-3">Enviar</button>
                </form>
            </div>
            <div className="col-sm-1"></div>
        </div>
    )
}

export default Contact;