# Welcome to Instant Translate JS

<p>Well, you may think that it is a plugin based on Google Translator, Bing Translator or Yandex Translator. YOU ARE WRONG! It is a simple but efficient JS function that will allow put your website in different languages by changing the text with a string.</p>

<h2>
<a id="what-is-differ-it-from-others" class="anchor" href="#what-is-differ-it-from-others" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>What differ it from others?</h2>

<p>So, as the name stated, this is an Instant Translate for your website. Your website will be translated in less than 1 second, YES! LESS THAN ONE SECOND! It is amazing, you don't need to reload your website to show up your website in another language. You just need to trigger a button and your website will be in another language.</p>

<h2>
<a id="how-to-use-it" class="anchor" href="#how-to-use-it" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>How to use it?</h2>

<p>This is the most important part of this plugin. HOW TO USE IT! It is simple as breathing! You just need to follow a few steps and you are done!</p>

<b><p>Step 1:</p></b>

<blockquote>
<p>Put the following code in your Script area: <pre>&lt;script src="js/instatranslate.js"&gt;&lt;/script&gt;</pre></p>

<p>The code is define as the next if you don't want to download our code: 
<pre>var Enabled=true;

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
        }</pre></p>
<p>Meaning that your file is under your js folder.</p>

<p>It will call the JavaScript to your website.</p>
</blockquote>

<b><p>Step 2:</p></b>

<blockquote>
<p>Copy the following code into your body: <pre>&lt;button id='translate_spanish' onclick="Enabled=true;translate_spanish();">Spanish&lt;/button&gt;
&lt;button id='translate_spanish' onclick="Enabled=false;translate_spanish();">English&lt;/button&gt;</pre></p>

<p>It will create two buttons, one with English language and the other one with Spanish language. It will call the JS loaded on your website</p>
</blockquote>

<b><p>Step 3:</p></b>

<blockquote>
<p>Copy the following code into your body: <pre>&lt;p id="welcome_message">Welcome To Our Website! Try to translate me!&lt;/p&gt;
</pre></p>

<p>Now, we are declaring a text with ID "welcome_message" which is already declared on the demo.
The JS will take this id and will replace it with the other text that you translate.</p>
</blockquote>

<b><p>Step 4:</p></b>

<blockquote>
<p>Wanted more steps? I am so sorry, we are just done :D</p>

</blockquote>
