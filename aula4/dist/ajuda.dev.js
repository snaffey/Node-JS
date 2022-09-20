"use strict";

var opcoens = ['pid->pid', 'arch->arquiterura', 'platform->plataforma'];

exports.mostrarAjuda = function () {
  opcoens.forEach(function (opcao) {
    console.log(opcao);
  });
};