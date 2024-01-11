
export default function Home() {
  return (
<>
  {/*Barra de Pesquisa*/}
  <div className="d-flex justify-content-center align-items-center">
    <div className="barra-pesquisa card custom-bg p-4 border border-3">
      <div className="d-flex align-items-center flex-wrap">
        {/* Origem */}
        <div className="form-group col-md mx-2">
          <label htmlFor="origin">
            <strong>Origem</strong>
          </label>
          <input
            type="text"
            placeholder="Cidade origem"
            className="form-control form-control-sm"
            id="origin"
            name="origin"
            required=""
          />
        </div>
        {/* Destino */}
        
        <div className="form-group col-md mx-2">
          <label htmlFor="depart">
            <strong>Destino</strong>
          </label>
          <input
            type="text"
            placeholder="Cidade destino"
            className="form-control form-control-sm"
            id="depart"
            name="depart"
            required=""
          />
        </div>
        {/* Ida */}
        <div className="form-group col-md mx-2">
          <label htmlFor="departure-date">
            <strong>Ida</strong>
          </label>
          <input
            type="date"
            className="form-control form-control-sm"
            id="departure-date"
            name="departure-date"
            onkeydown="return false"
            required=""
          />
        </div>
        {/* Volta */}
        <div className="form-group col-md mx-2">
          <label htmlFor="return-date">
            <strong>Volta</strong>
          </label>
          <input
            type="date"
            placeholder="One way"
            defaultValue=""
            className="form-control form-control-sm"
            id="return-date"
            name="return-date"
          />
        </div>
        {/* Botão de busca */}
        <div className="form-group col-md-auto mx-2 align-self-end">
          {/* Adicionando classe "btn-custom" para ajustar a margem do botão */}
          <button type="submit" className="btn btn-primary btn-sm btn-custom">
            🔎
          </button>
        </div>
      </div>
    </div>
  </div>
 
  <section
  className="destinos"
  id="destinos"
  style={{
    backgroundColor: "black",
    marginTop: "-19px",
    minHeight: "100vh",
    marginBottom: 0
  }}
>
  <div className="container">
    <div className="row" style={{ marginTop: 30 }}>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
        <img src="/maldives-island.jpg" alt="" />
          <div className="card-body">
            <h3 style={{ color: "white" }}> Paraíso nas Maldivas.</h3>
            <p style={{ color: "white" }}> Ásia.</p>
            <h6 style={{ color: "white" }}>Preço: US$ 3.500</h6>
            <br />
            <a href="#book">Comprar</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src="/mehtab-bagh-g1fdbf67db_1280.jpg" alt="" />
          <div className="card-body">
            <h3 style={{ color: "white" }}>Elegância do Taj Mahal.</h3>
            <p style={{ color: "white" }}> Taj Mahal, Índia.</p>
            <h6 style={{ color: "white" }}>Preço: US$ 1.500 </h6>
            <br />
            <a href="#book">Comprar</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src="/hggg11.jpg" alt="" />
          <div className="card-body">
            <h3 style={{ color: "white" }}>Tour por Hong Kong.</h3>
            <p style={{ color: "white" }}>Hong Kong, China .</p>
            <h6 style={{ color: "white" }}>Preço: US$ 4.500 </h6>
            <br />
            <a href="#book">Comprar</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row" style={{ marginTop: 30 }}>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src="/mountain-g7d1779034_1280.jpg" alt="" />
          <div className="card-body">
            <h3 style={{ color: "white" }}>Encantos Incas</h3>
            <p style={{ color: "white" }}>Machu Picchu, Peru .</p>
            <h6 style={{ color: "white" }}>Preço: US$ 1.200 </h6>
            <br />
            <a href="#book">Comprar</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src="/santorini-g85ada2fae_1280.jpg" alt="" />
          <div className="card-body">
            <h3 style={{ color: "white" }}>Encantos de Santorini.</h3>
            <p style={{ color: "white" }}>Santorini, Grécia.</p>
            <h6 style={{ color: "white" }}>Preço: US$ 3.500</h6>
            <br />
            <a href="#book">Comprar</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <img src="/fotos (8).png" alt="" />
          <div className="card-body">
            <h3 style={{ color: "white" }}> Luzes da Aurora.</h3>
            <p style={{ color: "white" }}>Aurora Boreal, Islândia.</p>
            <h6 style={{ color: "white" }}>Preço: US$ 2.500 </h6>
            <br />
            <a href="#book">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
</>

);
}

