import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://brasil.pyladies.com/">
      <img className="Logo" src={Logo} alt="PyladiesFlix logo"/>
      </a>
      <p>
        Orgulhosamente criado por <a href="https://emillyhorta.carrd.co/">Emilly Horta</a> da <a href="https://linktr.ee/pyladiesphb">Pyladies Parnaíba</a>  durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>
        <div>

        </div>
      </p>
    </FooterBase>
  );
}

export default Footer;
