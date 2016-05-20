var Enabled=true;

function translate_spanish()
        {
            if(Enabled == true)
              {
                  document.getElementById('welcome_message').innerHTML = 'Bienvenidos A Nuestro Sitio Web! Intenta traducirme!';
                  document.getElementById('button_spanish').innerHTML = 'Espa&ntilde;ol';
                  document.getElementById('button_english').innerHTML = 'Ingles';
              }else
                  {
                      document.getElementById('welcome_message').innerHTML = 'Welcome To Our Website! Try to translate me!';
                      document.getElementById('button_spanish').innerHTML = 'Spanish';
                      document.getElementById('button_english').innerHTML = 'English';
                    }
        }