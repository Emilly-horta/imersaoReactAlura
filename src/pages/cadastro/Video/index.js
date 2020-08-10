import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/Video';
import Button from '../../../components/Button';

function CadastroVideo() {
  const valoresIniciais ={
    titulo: 'Titulo Padrão',
    url: 'https://www.youtube.com/watch?v=K3Ei3ecX00k',
    categoria: 'front end',
  }

  const [videos,setVideos] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave,valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:3000/cadastro/videos';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setVideos(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video : {values.titulo} </h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setVideos([
          ...videos,
          values
        ]
        );
      }}>

        <FormField
          label="Titulo"
          type="text" 
          name="titulo"
          value={values.titulo}
          onChange={function handleChange(infosDoEvento){
            setValue('titulo', infosDoEvento.target.value
            )
           }}
        />
      
        <FormField
          label ="URL"
          type="text" 
          name="url"
          value={values.url}
          onChange={function handleChange(infosDoEvento){
            setValue('url',
            infosDoEvento.target.value)}} 
       />
      
      <FormField
          label="Categoria"
          type="text" 
          value={values.categoria}
          name="categoria"
          onChange={function handleChange(infosDoEvento){
            setValue('categoria',
            infosDoEvento.target.value)}}
        />
        

        <Button as={Link} className='ButtonLink' to='/'>
          Cadastrar
        </Button>
      </form>
      
      <ul></ul>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
          </Link>
    </PageDefault>
  )

}

export default CadastroVideo;