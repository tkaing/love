import '../css/page2.css';

import $ from 'jquery';
import swal from 'sweetalert';

$('body')
    .on('submit', 'form', function (event) {
        event.preventDefault();
        const Url = $(this).attr('action');
        const Album = {
            title: $('.title').val(),
            creation: $('.creation').val(),
            description: $('.details-description').val()
        };
        const Data = { album: JSON.stringify(Album) };
        $.ajax({
            url: Url,
            data: Data,
            method: 'POST',
            beforeSend: function () {
                swal("Traitement en cours...");
            },
            success: function (s) {
                const word = s.created ? 'ajouté' : 'modifié';
                swal("L'album a bien été "+ word +" !", {
                    icon: "success"
                });
                setTimeout(function () {
                    window.location.href = $('.control-prev').attr('href');
                }, 3000);
            },
            error: function (error) {
                swal({
                    title: "Oups!",
                    text: "Un problème a été rencontré.",
                    icon: "warning",
                    button: "Fermer",
                });
            },
            complete: function () {
                swal.close();
            }
        });
    })
    .on('click', '.control-remove', function () {
        const $this = $(this);
        swal({
            title: "Tu veux vraiment supprimer cet album ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const Url = $this.data('href');
                    $.ajax({
                        url: Url,
                        method: 'POST',
                        beforeSend: function () {
                            swal("Traitement en cours...");
                        },
                        success: function () {
                            swal("L'album a bien été supprimé !", {
                                icon: "success"
                            });
                            setTimeout(function () {
                                window.location.href = $('.control-prev').attr('href');
                            }, 3000);
                        },
                        error: function (error) {
                            swal({
                                title: "Oups!",
                                text: "Un problème a été rencontré.",
                                icon: "warning",
                                button: "Fermer",
                            });
                        },
                        complete: function () {
                            swal.close();
                        }
                    });
                } else {
                    swal.close();
                }
            });
    })
;