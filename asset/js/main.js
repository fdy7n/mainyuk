/*
Judul Project : Main Yuk!
Deskripsi : Main Yuk! adalah sebuah permainan seberapa sayang pacar kita. Main Yuk!
            dibuat dengan menggunakan Jquery.
Pembuat : Muhammad Surya Jayadiprana
Disclaimer : Tolong jangan hapus bagian ini, karena menandakan anda mengsupport
            developer lokal. Terima kasih
*/

// Dialog
$(document).on('click', '#tombolPopup', function (e) {
    e.preventDefault();
    Swal.fire({
        icon: 'info',
        title: 'Halo Cmewewku :3',
        text: 'Aku ada pertanyaan nih buat kamu wqwq',
        showClass: {
            popup: 'animate__animated animate__tada'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    }).then(() => {
        Swal.fire({
            title: 'Harus jawab jujur yes!',
            showClass: {
                popup: 'animate__animated animate__jackInTheBox'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
        }).then(() => {
            Swal.fire({
                icon: 'error',
                title: 'Awas aja kalo km boong',
                text: 'Jangan boong pls!',
                showClass: {
                    popup: 'animate__animated animate__jackInTheBox'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            }).then(() => {
                Swal.fire({
                    title: 'Masukin nama kamu dulu yaa',
                    showClass: {
                        popup: 'animate__animated animate__jackInTheBox'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    },
                    html: '<br><input class="form-control" placeholder="Masukin disini" id="input-field">',
                    content: {
                        element: "input",
                        attributes: {
                            placeholder: "Masukin disini",
                            type: "text",
                            id: "input-field",
                            className: "form-control"
                        },
                    },
                    buttons: {
                        cancel: {
                            visible: true,
                            className: 'btn btn-danger'
                        },
                        confirm: {
                            className: 'btn btn-success'
                        }
                    },
                }).then(
                    function () {
                        const nama = $('#input-field').val();
                        console.log(nama);
                        Swal.fire({
                            title: nama + ' ' + 'sayang gak sama aku?',
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Sayang Bgtt!',
                            cancelButtonText: 'G',
                            showClass: {
                                popup: 'animate__animated animate__jackInTheBox'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOut'
                            }
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: 'Aku juga sayang banget sama ' + nama + ' ' + 'xixixi',
                                    showClass: {
                                        popup: 'animate__animated animate__jackInTheBox'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOut'
                                    }
                                }).then(() => {
                                    Swal.queue([{
                                        title: 'Seberapa sayang' + ' ' + nama + ' ' + 'ke aku?',
                                        confirmButtonText: 'Submit',
                                        showCancelButton: true,
                                        text: 'Coba geser ya, pen tau seberapa sayang kamu ke aku :D',
                                        showClass: {
                                            popup: 'animate__animated animate__jackInTheBox'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOut'
                                        },
                                        showLoaderOnConfirm: true,
                                        input: 'range',
                                        inputAttributes: {
                                            min: 10,
                                            max: 100,
                                            step: 5,
                                            class: "form-range"
                                        },
                                        inputValue: 25,
                                        preConfirm: function (value) {
                                            Swal.insertQueueStep({
                                                title: 'Terima kasih sudah sayang ke aku' + ' ' + value + '%',
                                                icon: "info",
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                }
                                            })
                                        },
                                        allowOutsideClick: () => !Swal.isLoading()
                                    }]).then(() => {
                                        Swal.fire({
                                            title: 'Sekarang' + ' ' + nama + ' ' + 'kangen sama aku gak?',
                                            icon: 'question',
                                            type: 'question',
                                            showClass: {
                                                popup: 'animate__animated animate__jackInTheBox'
                                            },
                                            hideClass: {
                                                popup: 'animate__animated animate__fadeOut'
                                            },
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'Kangen bgtt pls',
                                            cancelButtonText: 'G, b aj'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                Swal.fire({
                                                    title: 'Sama aku juga kangen sama' + ' ' + nama,
                                                    icon: 'info',
                                                    showClass: {
                                                        popup: 'animate__animated animate__jackInTheBox'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOut'
                                                    }
                                                }).then(() => {
                                                    Swal.fire({
                                                        title: 'Terakhir nih..',
                                                        icon: 'info',
                                                        text: 'Langsung klik OK aja ya wkwk',
                                                        showClass: {
                                                            popup: 'animate__animated animate__jackInTheBox'
                                                        },
                                                        hideClass: {
                                                            popup: 'animate__animated animate__fadeOut'
                                                        }
                                                    }).then(() => {
                                                        $("#tombolPopup").remove();
                                                        $("#bubble").remove();
                                                        $("#lope").removeClass("tulisan");
                                                        $.playSound('asset/audio/mine.mp3');
                                                        confetti.start();
                                                    })
                                                })
                                            } else {
                                                Swal.fire({
                                                    title: 'Yadah kl gt :c',
                                                }).then(() => {
                                                    Swal.fire({
                                                        imageUrl: 'https://media.giphy.com/media/6f2vpLNBPFUnZAgDCM/giphy.gif',
                                                        imageHeight: 300,
                                                        showClass: {
                                                            popup: 'animate__animated animate__jackInTheBox'
                                                        },
                                                        hideClass: {
                                                            popup: 'animate__animated animate__fadeOut'
                                                        }
                                                    }).then(() => {
                                                        $("body,html").css("background-color", "#2d3436");
                                                        $("#tombolPopup").remove();
                                                        $("#bubble").remove();
                                                        $("#potek").removeClass("tulisan");
                                                        $(document).ready(function () {
                                                            var canvas = $('#canvas')[0];
                                                            canvas.width = window.innerWidth;
                                                            canvas.height = window.innerHeight;
                                                            if (canvas.getContext) {
                                                                var ctx = canvas.getContext('2d');
                                                                var w = canvas.width;
                                                                var h = canvas.height;
                                                                ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                                ctx.lineWidth = 1;
                                                                ctx.lineCap = 'round';
                                                                var init = [];
                                                                var maxParts = 1000;
                                                                for (var a = 0; a < maxParts; a++) {
                                                                    init.push({
                                                                        x: Math.random() * w,
                                                                        y: Math.random() * h,
                                                                        l: Math.random() * 1,
                                                                        xs: -4 + Math.random() * 4 + 2,
                                                                        ys: Math.random() * 10 + 10
                                                                    })
                                                                }
                                                                var particles = [];
                                                                for (var b = 0; b < maxParts; b++) {
                                                                    particles[b] = init[b];
                                                                }

                                                                function draw() {
                                                                    ctx.clearRect(0, 0, w, h);
                                                                    for (var c = 0; c < particles.length; c++) {
                                                                        var p = particles[c];
                                                                        ctx.beginPath();
                                                                        ctx.moveTo(p.x, p.y);
                                                                        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                        ctx.stroke();
                                                                    }
                                                                    move();
                                                                }

                                                                function move() {
                                                                    for (var b = 0; b < particles.length; b++) {
                                                                        var p = particles[b];
                                                                        p.x += p.xs;
                                                                        p.y += p.ys;
                                                                        if (p.x > w || p.y > h) {
                                                                            p.x = Math.random() * w;
                                                                            p.y = -20;
                                                                        }
                                                                    }
                                                                }
                                                                setInterval(draw, 30);
                                                            }
                                                        })
                                                        $.playSound('asset/audio/sakit.mp3');
                                                    })
                                                })
                                            }
                                        })
                                    })
                                })
                            } else {
                                Swal.fire({
                                    title: 'Beneran? Aku tanya sekali lagi nih. Sayang gak sama aku?',
                                    icon: 'question',
                                    text: 'Coba jawab yang bener ????????',
                                    showCancelButton: true,
                                    confirmButtonText: 'Beneran, enggak',
                                    cancelButtonText: 'Ya, sayang lah!',
                                    confirmButtonColor: '#d33',
                                    cancelButtonColor: '#3085d6',
                                    showClass: {
                                        popup: 'animate__animated animate__jackInTheBox'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOut'
                                    }
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        Swal.fire({
                                            title: 'Yaudah deh kl gt',
                                        }).then(() => {
                                            Swal.fire({
                                                imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                imageHeight: 300,
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                }
                                            }).then(() => {
                                                $("body,html").css("background-color", "#2d3436");
                                                $("#tombolPopup").remove();
                                                $("#bubble").remove();
                                                $("#potek").removeClass("tulisan");
                                                $(document).ready(function () {
                                                    var canvas = $('#canvas')[0];
                                                    canvas.width = window.innerWidth;
                                                    canvas.height = window.innerHeight;
                                                    if (canvas.getContext) {
                                                        var ctx = canvas.getContext('2d');
                                                        var w = canvas.width;
                                                        var h = canvas.height;
                                                        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                        ctx.lineWidth = 1;
                                                        ctx.lineCap = 'round';
                                                        var init = [];
                                                        var maxParts = 1000;
                                                        for (var a = 0; a < maxParts; a++) {
                                                            init.push({
                                                                x: Math.random() * w,
                                                                y: Math.random() * h,
                                                                l: Math.random() * 1,
                                                                xs: -4 + Math.random() * 4 + 2,
                                                                ys: Math.random() * 10 + 10
                                                            })
                                                        }
                                                        var particles = [];
                                                        for (var b = 0; b < maxParts; b++) {
                                                            particles[b] = init[b];
                                                        }

                                                        function draw() {
                                                            ctx.clearRect(0, 0, w, h);
                                                            for (var c = 0; c < particles.length; c++) {
                                                                var p = particles[c];
                                                                ctx.beginPath();
                                                                ctx.moveTo(p.x, p.y);
                                                                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                ctx.stroke();
                                                            }
                                                            move();
                                                        }

                                                        function move() {
                                                            for (var b = 0; b < particles.length; b++) {
                                                                var p = particles[b];
                                                                p.x += p.xs;
                                                                p.y += p.ys;
                                                                if (p.x > w || p.y > h) {
                                                                    p.x = Math.random() * w;
                                                                    p.y = -20;
                                                                }
                                                            }
                                                        }
                                                        setInterval(draw, 30);
                                                    }
                                                })
                                                $.playSound('asset/audio/sakit.mp3');
                                            })
                                        })
                                    } else {
                                        Swal.fire({
                                            title: 'Aku juga sayang banget sama ' + nama + '!!'
                                        }).then(() => {
                                            Swal.queue([{
                                                title: 'Seberapa sayang' + ' ' + nama + ' ' + 'ke aku?',
                                                confirmButtonText: 'Submit',
                                                showCancelButton: true,
                                                text: 'Coba geser, pen tau seberapa sayang kamu ke aku ehe',
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                },
                                                showLoaderOnConfirm: true,
                                                input: 'range',
                                                inputAttributes: {
                                                    min: 10,
                                                    max: 100,
                                                    step: 10,
                                                    class: "form-range"
                                                },
                                                inputValue: 15,
                                                preConfirm: function (value) {
                                                    Swal.insertQueueStep({
                                                        title: 'Terima kasih udah sayang ke aku' + ' ' + value + '% ????',
                                                        icon: "info"
                                                    })
                                                },
                                                allowOutsideClick: () => !Swal.isLoading()
                                            }]).then(() => {
                                                Swal.fire({
                                                    title: 'Sekarang' + ' ' + nama + ' ' + 'kangen sama aku gak?',
                                                    icon: 'question',
                                                    type: 'question',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: 'Kangen bgtt plis',
                                                    cancelButtonText: 'G',
                                                    showClass: {
                                                        popup: 'animate__animated animate__jackInTheBox'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOut'
                                                    }
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire({
                                                            title: 'Sama! Aku juga kangen sama' + ' ' + nama + '! ' + 'uWu',
                                                            icon: 'info',
                                                            showClass: {
                                                                popup: 'animate__animated animate__jackInTheBox'
                                                            },
                                                            hideClass: {
                                                                popup: 'animate__animated animate__fadeOut'
                                                            }
                                                        }).then(() => {
                                                            Swal.fire({
                                                                title: 'Terakhir nih...',
                                                                icon: 'info',
                                                                text: 'Langsung klik OK aja ya wkwk',
                                                                showClass: {
                                                                    popup: 'animate__animated animate__jackInTheBox'
                                                                },
                                                                hideClass: {
                                                                    popup: 'animate__animated animate__fadeOut'
                                                                }
                                                            }).then(() => {
                                                                $("#tombolPopup").remove();
                                                                $("#bubble").remove();
                                                                $("#lope").removeClass("tulisan");
                                                                $.playSound('asset/audio/mine.mp3');
                                                                confetti.start();
                                                            })
                                                        })
                                                    } else {
                                                        Swal.fire({
                                                            title: 'Yadah kl gt',
                                                        }).then(() => {
                                                            Swal.fire({
                                                                imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                                imageHeight: 300,
                                                                showClass: {
                                                                    popup: 'animate__animated animate__jackInTheBox'
                                                                },
                                                                hideClass: {
                                                                    popup: 'animate__animated animate__fadeOut'
                                                                }
                                                            }).then(() => {
                                                                $("body,html").css("background-color", "#2d3436");
                                                                $("#tombolPopup").remove();
                                                                $("#bubble").remove();
                                                                $("#potek").removeClass("tulisan");
                                                                $(document).ready(function () {
                                                                    var canvas = $('#canvas')[0];
                                                                    canvas.width = window.innerWidth;
                                                                    canvas.height = window.innerHeight;
                                                                    if (canvas.getContext) {
                                                                        var ctx = canvas.getContext('2d');
                                                                        var w = canvas.width;
                                                                        var h = canvas.height;
                                                                        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                                        ctx.lineWidth = 1;
                                                                        ctx.lineCap = 'round';
                                                                        var init = [];
                                                                        var maxParts = 1000;
                                                                        for (var a = 0; a < maxParts; a++) {
                                                                            init.push({
                                                                                x: Math.random() * w,
                                                                                y: Math.random() * h,
                                                                                l: Math.random() * 1,
                                                                                xs: -4 + Math.random() * 4 + 2,
                                                                                ys: Math.random() * 10 + 10
                                                                            })
                                                                        }
                                                                        var particles = [];
                                                                        for (var b = 0; b < maxParts; b++) {
                                                                            particles[b] = init[b];
                                                                        }

                                                                        function draw() {
                                                                            ctx.clearRect(0, 0, w, h);
                                                                            for (var c = 0; c < particles.length; c++) {
                                                                                var p = particles[c];
                                                                                ctx.beginPath();
                                                                                ctx.moveTo(p.x, p.y);
                                                                                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                                ctx.stroke();
                                                                            }
                                                                            move();
                                                                        }

                                                                        function move() {
                                                                            for (var b = 0; b < particles.length; b++) {
                                                                                var p = particles[b];
                                                                                p.x += p.xs;
                                                                                p.y += p.ys;
                                                                                if (p.x > w || p.y > h) {
                                                                                    p.x = Math.random() * w;
                                                                                    p.y = -20;
                                                                                }
                                                                            }
                                                                        }
                                                                        setInterval(draw, 30);
                                                                    }
                                                                })
                                                                $.playSound('asset/audio/sakit.mp3');
                                                            })
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    }
                                })
                            }
                        })
                    }
                )
            })
        })
    })
});
