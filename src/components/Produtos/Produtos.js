import React from "react";
import "./produtos.css";

// Icons
import { Edit, ShoppingCart, Filter, List, Grid } from "react-feather";

export default function Produtos() {
  return (
    <main>
      <span>Produtos > Listagem de Produtos</span>
      <div className="h2-icons">
        <h2>Listagem de Produtos</h2>
        <div className="icons-produtos">
          <button>
            <Filter height="18" />
          </button>
          <button>
            <List height="18" />
          </button>
          <button class="active">
            <Grid height="18" />
          </button>
        </div>
      </div>

      <div className="produtos">
        <div className="cards">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg" />
          <span>Novo</span>
          <div class="infos">
            <span>Fornecedor</span>
            <span class="info">Nome Fornecedor</span>
          </div>
          <div class="infos">
            <span>Descrição</span>
            <span class="info desc">Descrição completa do produto</span>
          </div>
          <div class="infos">
            <span>ID do produto</span>
            <span class="info">789456</span>
          </div>
          <div class="infos">
            <span>Material</span>
            <span class="info">123456789</span>
          </div>
          <div class="infos">
            <span>Valor</span>
            <span class="info">180,00</span>
          </div>

          <div class="buttons">
            <button>
              <Edit height="15" />
              <span>Editar</span>
            </button>
            <button>
              <ShoppingCart height="15" />
              <span>Carrinho</span>
            </button>
          </div>
        </div>

        <div className="cards">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg" />
          <span>Novo</span>
          <div class="infos">
            <span>Fornecedor</span>
            <span class="info">Nome Fornecedor</span>
          </div>
          <div class="infos">
            <span>Descrição</span>
            <span class="info desc">Descrição completa do produto</span>
          </div>
          <div class="infos">
            <span>ID do produto</span>
            <span class="info">789456</span>
          </div>
          <div class="infos">
            <span>Material</span>
            <span class="info">123456789</span>
          </div>
          <div class="infos">
            <span>Valor</span>
            <span class="info">180,00</span>
          </div>

          <div class="buttons">
            <button>
              <Edit height="15" />
              <span>Editar</span>
            </button>
            <button>
              <ShoppingCart height="15" />
              <span>Carrinho</span>
            </button>
          </div>
        </div>

        <div className="cards">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg" />
          <span>Novo</span>
          <div class="infos">
            <span>Fornecedor</span>
            <span class="info">Nome Fornecedor</span>
          </div>
          <div class="infos">
            <span>Descrição</span>
            <span class="info desc">Descrição completa do produto</span>
          </div>
          <div class="infos">
            <span>ID do produto</span>
            <span class="info">789456</span>
          </div>
          <div class="infos">
            <span>Material</span>
            <span class="info">123456789</span>
          </div>
          <div class="infos">
            <span>Valor</span>
            <span class="info">180,00</span>
          </div>

          <div class="buttons">
            <button>
              <Edit height="15" />
              <span>Editar</span>
            </button>
            <button>
              <ShoppingCart height="15" />
              <span>Carrinho</span>
            </button>
          </div>
        </div>

        <div className="cards">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg" />
          <span>Novo</span>
          <div class="infos">
            <span>Fornecedor</span>
            <span class="info">Nome Fornecedor</span>
          </div>
          <div class="infos">
            <span>Descrição</span>
            <span class="info desc">Descrição completa do produto</span>
          </div>
          <div class="infos">
            <span>ID do produto</span>
            <span class="info">789456</span>
          </div>
          <div class="infos">
            <span>Material</span>
            <span class="info">123456789</span>
          </div>
          <div class="infos">
            <span>Valor</span>
            <span class="info">180,00</span>
          </div>

          <div class="buttons">
            <button>
              <Edit height="15" />
              <span>Editar</span>
            </button>
            <button>
              <ShoppingCart height="15" />
              <span>Carrinho</span>
            </button>
          </div>
        </div>

        <div className="cards">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg" />
          <span>Novo</span>
          <div class="infos">
            <span>Fornecedor</span>
            <span class="info">Nome Fornecedor</span>
          </div>
          <div class="infos">
            <span>Descrição</span>
            <span class="info desc">Descrição completa do produto</span>
          </div>
          <div class="infos">
            <span>ID do produto</span>
            <span class="info">789456</span>
          </div>
          <div class="infos">
            <span>Material</span>
            <span class="info">123456789</span>
          </div>
          <div class="infos">
            <span>Valor</span>
            <span class="info">180,00</span>
          </div>

          <div class="buttons">
            <button>
              <Edit height="15" />
              <span>Editar</span>
            </button>
            <button>
              <ShoppingCart height="15" />
              <span>Carrinho</span>
            </button>
          </div>
        </div>

        <div className="cards">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg" />
          <span>Novo</span>
          <div class="infos">
            <span>Fornecedor</span>
            <span class="info">Nome Fornecedor</span>
          </div>
          <div class="infos">
            <span>Descrição</span>
            <span class="info desc">Descrição completa do produto</span>
          </div>
          <div class="infos">
            <span>ID do produto</span>
            <span class="info">789456</span>
          </div>
          <div class="infos">
            <span>Material</span>
            <span class="info">123456789</span>
          </div>
          <div class="infos">
            <span>Valor</span>
            <span class="info">180,00</span>
          </div>

          <div class="buttons">
            <button>
              <Edit height="15" />
              <span>Editar</span>
            </button>
            <button>
              <ShoppingCart height="15" />
              <span>Carrinho</span>
            </button>
          </div>
        </div>

        <div className="cards">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg" />
          <span>Novo</span>
          <div class="infos">
            <span>Fornecedor</span>
            <span class="info">Nome Fornecedor</span>
          </div>
          <div class="infos">
            <span>Descrição</span>
            <span class="info desc">Descrição completa do produto</span>
          </div>
          <div class="infos">
            <span>ID do produto</span>
            <span class="info">789456</span>
          </div>
          <div class="infos">
            <span>Material</span>
            <span class="info">123456789</span>
          </div>
          <div class="infos">
            <span>Valor</span>
            <span class="info">180,00</span>
          </div>

          <div class="buttons">
            <button>
              <Edit height="15" />
              <span>Editar</span>
            </button>
            <button>
              <ShoppingCart height="15" />
              <span>Carrinho</span>
            </button>
          </div>
        </div>

        <div className="cards">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg" />
          <span>Novo</span>
          <div class="infos">
            <span>Fornecedor</span>
            <span class="info">Nome Fornecedor</span>
          </div>
          <div class="infos">
            <span>Descrição</span>
            <span class="info desc">Descrição completa do produto</span>
          </div>
          <div class="infos">
            <span>ID do produto</span>
            <span class="info">789456</span>
          </div>
          <div class="infos">
            <span>Material</span>
            <span class="info">123456789</span>
          </div>
          <div class="infos">
            <span>Valor</span>
            <span class="info">180,00</span>
          </div>

          <div class="buttons">
            <button>
              <Edit height="15" />
              <span>Editar</span>
            </button>
            <button>
              <ShoppingCart height="15" />
              <span>Carrinho</span>
            </button>
          </div>
        </div>

        <div className="cards">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg" />
          <span>Novo</span>
          <div class="infos">
            <span>Fornecedor</span>
            <span class="info">Nome Fornecedor</span>
          </div>
          <div class="infos">
            <span>Descrição</span>
            <span class="info desc">Descrição completa do produto</span>
          </div>
          <div class="infos">
            <span>ID do produto</span>
            <span class="info">789456</span>
          </div>
          <div class="infos">
            <span>Material</span>
            <span class="info">123456789</span>
          </div>
          <div class="infos">
            <span>Valor</span>
            <span class="info">180,00</span>
          </div>

          <div class="buttons">
            <button>
              <Edit height="15" />
              <span>Editar</span>
            </button>
            <button>
              <ShoppingCart height="15" />
              <span>Carrinho</span>
            </button>
          </div>
        </div>

        <div className="cards">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg" />
          <span>Novo</span>
          <div class="infos">
            <span>Fornecedor</span>
            <span class="info">Nome Fornecedor</span>
          </div>
          <div class="infos">
            <span>Descrição</span>
            <span class="info desc">Descrição completa do produto</span>
          </div>
          <div class="infos">
            <span>ID do produto</span>
            <span class="info">789456</span>
          </div>
          <div class="infos">
            <span>Material</span>
            <span class="info">123456789</span>
          </div>
          <div class="infos">
            <span>Valor</span>
            <span class="info">180,00</span>
          </div>

          <div class="buttons">
            <button>
              <Edit height="15" />
              <span>Editar</span>
            </button>
            <button>
              <ShoppingCart height="15" />
              <span>Carrinho</span>
            </button>
          </div>
        </div>

        <div className="cards">
          <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg" />
          <span>Novo</span>
          <div class="infos">
            <span>Fornecedor</span>
            <span class="info">Nome Fornecedor</span>
          </div>
          <div class="infos">
            <span>Descrição</span>
            <span class="info desc">Descrição completa do produto</span>
          </div>
          <div class="infos">
            <span>ID do produto</span>
            <span class="info">789456</span>
          </div>
          <div class="infos">
            <span>Material</span>
            <span class="info">123456789</span>
          </div>
          <div class="infos">
            <span>Valor</span>
            <span class="info">180,00</span>
          </div>

          <div class="buttons">
            <button>
              <Edit height="15" />
              <span>Editar</span>
            </button>
            <button>
              <ShoppingCart height="15" />
              <span>Carrinho</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
