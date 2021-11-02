import React from "react";
import "./navleft.css";

// Icons
import {
  Box,
  Settings,
  Tool,
  PlusSquare,
  Upload,
  GitCommit,
  FilePlus,
  FileText,
  Edit,
  User,
  Briefcase,
  LogOut
} from "react-feather";

export default function () {
  return (
    <nav className="navleft">
      <div>
        <span>PRODUTOS</span>
        <ul>
          <li>
            <a href="#" className="active">
              <Box height="16" />
              <span>Listagem de Produtos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Tool height="16" />
              <span>Configurar Padrões</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <span>CADASTRO</span>
        <ul>
          <li>
            <a href="#">
              <PlusSquare height="16" />
              <span>Cadastro Unitário</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Upload height="16" />
              <span>Cadastro em Massa</span>
            </a>
          </li>
          <li>
            <a href="#">
              <GitCommit height="16" />
              <span>Acompanhamento</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <span>PEDIDOS</span>
        <ul>
          <li>
            <a href="#">
              <FilePlus height="16" />
              <span>Novo Pré-Pedido</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FileText height="16" />
              <span>Histórico de Pedido</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Edit height="16" />
              <span>Solicitação de Alteração</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <span>ACESSO</span>
        <ul>
          <li>
            <a href="#">
              <Briefcase height="16" />
              <span>Usuários Fornecedores</span>
            </a>
          </li>
          <li>
            <a href="#">
              <User height="16" />
              <span>Usuários Colaboradores</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Settings height="16" />
              <span>Perfis</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">
              <LogOut height="16" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
