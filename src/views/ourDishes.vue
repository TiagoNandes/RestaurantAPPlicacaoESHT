<template>
  <div class="restaurantPage">
    <navBar2></navBar2>
    <div class="container">
      <div class="row">
        <div class="col-sm-2 sidenav"></div>
        <div class="col-sm-8 text-center" style="padding-top:85px; margin-bottom: -40px;">
          <div id="mainText">
            <img
              src="../assets/alDente.png"
              alt="Logo do Restaurante"
              style="transform: scale(0.5); margin-bottom: -70px;"
            />
            <hr />
            <h4 style="color: #127834; font-family:Courgette;">
              <b>Os nossos pratos</b>
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="container">
        <div class="row">
          <div
            class="text-center mx-auto col-lg-10 col-md-10"
            style="margin-bottom: 50px"
          >
            <!-- <h2 class="text-white">Heading 2</h2> -->
            <p>
              Das entradas até às sobremesas, aqui se encontram uns dos nossos melhores pratos!
            </p>
          </div>
        </div>
      </div><!-- -->
    </div>

    <div >
      <div class="container">
        <div class="row">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                class="thumbnail"
                href="#"
                data-image-id
                data-toggle="modal"
                data-title="A nossa entrada mais cobiçada"
                data-image="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/83122151_2855915794459499_8622356372404568064_o.jpg?_nc_cat=100&_nc_oc=AQkKo1zgJUy5-Ij-cHP7LXXJqltSi27OnOuiXTvEEG2sl3jMTEjRnKs_4AocG-OoHDQ&_nc_ht=scontent.flis7-1.fna&oh=e8c8f447af1f8ec5ad8097ead634d00f&oe=5E922518"
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/83122151_2855915794459499_8622356372404568064_o.jpg?_nc_cat=100&_nc_oc=AQkKo1zgJUy5-Ij-cHP7LXXJqltSi27OnOuiXTvEEG2sl3jMTEjRnKs_4AocG-OoHDQ&_nc_ht=scontent.flis7-1.fna&oh=e8c8f447af1f8ec5ad8097ead634d00f&oe=5E922518"
                  alt="Another alt text"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                class="thumbnail"
                href="#"
                data-image-id
                data-toggle="modal"
                data-title="Pimentos recheados"
                data-image="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/79327001_2789049214479491_5991108868271243264_o.jpg?_nc_cat=106&_nc_oc=AQkjYhwGc_8-hEpm9-nYKyEVh2sBtIHx0QLq9XI25mOOq9ngUkau-Y88YG0zfRRd2DI&_nc_ht=scontent.flis7-1.fna&oh=9e0bb85d420c47a8a3c86b1942977392&oe=5EC6EFED"
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/79327001_2789049214479491_5991108868271243264_o.jpg?_nc_cat=106&_nc_oc=AQkjYhwGc_8-hEpm9-nYKyEVh2sBtIHx0QLq9XI25mOOq9ngUkau-Y88YG0zfRRd2DI&_nc_ht=scontent.flis7-1.fna&oh=9e0bb85d420c47a8a3c86b1942977392&oe=5EC6EFED"
                  alt="Another alt text"
                />
              </a>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                class="thumbnail"
                href="#"
                data-image-id
                data-toggle="modal"
                data-title="Temos um grande catálogo de vinhos!"
                data-image="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/80830262_2789048237812922_4153230759596916736_o.jpg?_nc_cat=103&_nc_oc=AQkik18AxU-iYHaPkMnGLMu5in-FITYKQ3nNMUClLWyhWKik0aGhSwWYwnEAbIf9QM4&_nc_ht=scontent.flis7-1.fna&oh=996f0caa21a24540ee2a6bedaedbc28b&oe=5ED37E39"
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/80830262_2789048237812922_4153230759596916736_o.jpg?_nc_cat=103&_nc_oc=AQkik18AxU-iYHaPkMnGLMu5in-FITYKQ3nNMUClLWyhWKik0aGhSwWYwnEAbIf9QM4&_nc_ht=scontent.flis7-1.fna&oh=996f0caa21a24540ee2a6bedaedbc28b&oe=5ED37E39"
                  alt="Another alt text"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                class="thumbnail"
                href="#"
                data-image-id
                data-toggle="modal"
                data-title="A nossa apresentação é sempre muito cuidada!"
                data-image="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/79315938_2782251335159279_6186749348773101568_o.jpg?_nc_cat=102&_nc_oc=AQk_5TpwrtIVPbkli1T3g5wr6j73DT3zTaYWhCz6S9piVnuYsjriUj4vWiaNYbY8qWY&_nc_ht=scontent.flis7-1.fna&oh=8568316c8a589160b6ce34b5293c66d6&oe=5E90E14D"
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/79315938_2782251335159279_6186749348773101568_o.jpg?_nc_cat=102&_nc_oc=AQk_5TpwrtIVPbkli1T3g5wr6j73DT3zTaYWhCz6S9piVnuYsjriUj4vWiaNYbY8qWY&_nc_ht=scontent.flis7-1.fna&oh=8568316c8a589160b6ce34b5293c66d6&oe=5E90E14D"
                  alt="Another alt text"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                class="thumbnail"
                href="#"
                data-image-id
                data-toggle="modal"
                data-title=""
                data-image="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/79901074_2773139182737161_5562591167876431872_o.jpg?_nc_cat=103&_nc_oc=AQnyZIb_2Dbt1quH6zKERGplRtFTK3UZ1heshzMssGFHR6u3okwTNF8DrORZdtiLsTU&_nc_ht=scontent.flis7-1.fna&oh=64ffc693be371530848277421b2e78b7&oe=5EC69EC5"
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/79901074_2773139182737161_5562591167876431872_o.jpg?_nc_cat=103&_nc_oc=AQnyZIb_2Dbt1quH6zKERGplRtFTK3UZ1heshzMssGFHR6u3okwTNF8DrORZdtiLsTU&_nc_ht=scontent.flis7-1.fna&oh=64ffc693be371530848277421b2e78b7&oe=5EC69EC5"
                  alt="Another alt text"
                />
              </a>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                class="thumbnail"
                href="#"
                data-image-id
                data-toggle="modal"
                data-title=""
                data-image="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/46493250_2102689943115425_8268805329001644032_n.jpg?_nc_cat=102&_nc_oc=AQlI7tCe54376kXS56RlAF95NXtXcHbg5YBDEBBaP8ZCa3t52fIuGvcHffKKgu3GYE8&_nc_ht=scontent.flis7-1.fna&oh=877087daf322dd7259e1e82d9dc27251&oe=5ED4C375"
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/46493250_2102689943115425_8268805329001644032_n.jpg?_nc_cat=102&_nc_oc=AQlI7tCe54376kXS56RlAF95NXtXcHbg5YBDEBBaP8ZCa3t52fIuGvcHffKKgu3GYE8&_nc_ht=scontent.flis7-1.fna&oh=877087daf322dd7259e1e82d9dc27251&oe=5ED4C375"
                  alt="Another alt text"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                class="thumbnail"
                href="#"
                data-image-id
                data-toggle="modal"
                data-title=""
                data-image="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/46451865_2100146196703133_555612611681452032_o.jpg?_nc_cat=101&_nc_oc=AQkyRo6dBP2LWUmU7-NRUBGUd2zdweNWqc_jMnaFEN1Hn0DwNI-YY972Qg4aWbD3KaQ&_nc_ht=scontent.flis7-1.fna&oh=80da463b6f3e1d987e514a9a51a1f705&oe=5EC3637B"
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/46451865_2100146196703133_555612611681452032_o.jpg?_nc_cat=101&_nc_oc=AQkyRo6dBP2LWUmU7-NRUBGUd2zdweNWqc_jMnaFEN1Hn0DwNI-YY972Qg4aWbD3KaQ&_nc_ht=scontent.flis7-1.fna&oh=80da463b6f3e1d987e514a9a51a1f705&oe=5EC3637B"
                  alt="Another alt text"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                class="thumbnail"
                href="#"
                data-image-id
                data-toggle="modal"
                data-title=""
                data-image="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/79134415_2773139342737145_3708647923009978368_o.jpg?_nc_cat=104&_nc_oc=AQm3YbdF2IWEz0VTQDETr-RXj8yCwH9HoHQC1MuaxXLCeCbPAiwnscra-2CJq365i-w&_nc_ht=scontent.flis7-1.fna&oh=1b205489b732f9adfb39c694d42d14b7&oe=5ED8965E"
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/79134415_2773139342737145_3708647923009978368_o.jpg?_nc_cat=104&_nc_oc=AQm3YbdF2IWEz0VTQDETr-RXj8yCwH9HoHQC1MuaxXLCeCbPAiwnscra-2CJq365i-w&_nc_ht=scontent.flis7-1.fna&oh=1b205489b732f9adfb39c694d42d14b7&oe=5ED8965E"
                  alt="Another alt text"
                />
              </a>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                class="thumbnail"
                href="#"
                data-image-id
                data-toggle="modal"
                data-title=""
                data-image="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/78711380_2773139189403827_4463550350120452096_o.jpg?_nc_cat=101&_nc_oc=AQmOzKTAEElbKdeg4WLQNHX_T2REVJ2-11ZA60Xc7av2SKQ0aw099zXFkHPr6-SE-nE&_nc_ht=scontent.flis7-1.fna&oh=a9349d38656133f84aadaf8b155e391e&oe=5ED09879"
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/78711380_2773139189403827_4463550350120452096_o.jpg?_nc_cat=101&_nc_oc=AQmOzKTAEElbKdeg4WLQNHX_T2REVJ2-11ZA60Xc7av2SKQ0aw099zXFkHPr6-SE-nE&_nc_ht=scontent.flis7-1.fna&oh=a9349d38656133f84aadaf8b155e391e&oe=5ED09879"
                  alt="Another alt text"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                class="thumbnail"
                href="#"
                data-image-id
                data-toggle="modal"
                data-title="Uma francesinha para todos os gostos"
                data-image="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/47286845_2112187315499021_7501949690078822400_n.jpg?_nc_cat=101&_nc_oc=AQmpHqSVkblykctxAMeSrvrstbcSfV5msxpIJN34bigrU2GPvNGO2S749-Go_UXibKk&_nc_ht=scontent.flis7-1.fna&oh=608c10869fb7ce01a70da8c4da98c699&oe=5E926C2B"
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/47286845_2112187315499021_7501949690078822400_n.jpg?_nc_cat=101&_nc_oc=AQmpHqSVkblykctxAMeSrvrstbcSfV5msxpIJN34bigrU2GPvNGO2S749-Go_UXibKk&_nc_ht=scontent.flis7-1.fna&oh=608c10869fb7ce01a70da8c4da98c699&oe=5E926C2B"
                  alt="Another alt text"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
              <a
                class="thumbnail"
                href="#"
                data-image-id
                data-toggle="modal"
                data-title=""
                data-image="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/49614617_2165969543454131_7315948250060554240_n.jpg?_nc_cat=111&_nc_oc=AQnWzYfxRnLCKq9X1QQOQuUrfcSHv8nnnOQX87KNOHEA3pVfThkwuYAurA45V2E4vgY&_nc_ht=scontent.flis7-1.fna&oh=66720de199b7ddf8f8016bb95f3e5dca&oe=5E94B6E1"
                data-target="#image-gallery"
              >
                <img
                  class="img-thumbnail"
                  src="https://scontent.flis7-1.fna.fbcdn.net/v/t1.0-9/49614617_2165969543454131_7315948250060554240_n.jpg?_nc_cat=111&_nc_oc=AQnWzYfxRnLCKq9X1QQOQuUrfcSHv8nnnOQX87KNOHEA3pVfThkwuYAurA45V2E4vgY&_nc_ht=scontent.flis7-1.fna&oh=66720de199b7ddf8f8016bb95f3e5dca&oe=5E94B6E1"
                  alt="Another alt text"
                />
              </a>
            </div>
          </div>

          <div
            class="modal fade"
            id="image-gallery"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title" id="image-gallery-title"></h4>
                  <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">Close</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img id="image-gallery-image" class="img-responsive col-md-12" src />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary float-left"
                    id="show-previous-image"
                  >
                    <i class="fa fa-arrow-left"></i>
                  </button>

                  <button type="button" id="show-next-image" class="btn btn-secondary float-right">
                    <i class="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.btn:focus,
.btn:active,
button:focus,
button:active {
  outline: none !important;
  box-shadow: none !important;
}

.btn-secondary {
  background-color: #127834;
  border-color: #127834;
}
.btn-secondary:hover {
  background-color: #0c4d22;
  border-color: #0c4d22;
}

#image-gallery .modal-footer {
  display: block;
}

.thumb {
  margin-top: 15px;
  margin-bottom: 15px;
}

.restaurantPage {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.home {
  background-image: url("../assets/bg.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

#logoText {
  position: relative;
  bottom: 10px;
}

#mainText {
  position: relative;
  bottom: 45px;
}

/*#footer{
  height: 50px;
  position: absolute;
  bottom: -25px;
  background-color: #383a38;
  border-radius: 25px;
} */
</style>




<script>
// @ is an alias to /src
import bgImage from "@/assets/bg.png";
import navBar2 from "@/components/navBar2.vue";
import jQuery from "jquery";

export default {
  name: "main",
  components: {
    navBar2
  },
  data() {
    return {
      bgImage: bgImage
    };
  },
  mounted() {
    let $ = jQuery;
    let modalId = $("#image-gallery");

    $(document).ready(function() {
      loadGallery(true, "a.thumbnail");

      //This function disables buttons when needed
      function disableButtons(counter_max, counter_current) {
        $("#show-previous-image, #show-next-image").show();
        if (counter_max === counter_current) {
          $("#show-next-image").hide();
        } else if (counter_current === 1) {
          $("#show-previous-image").hide();
        }
      }

      /**
       *
       * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
       * @param setClickAttr  Sets the attribute for the click handler.
       */

      function loadGallery(setIDs, setClickAttr) {
        let current_image,
          selector,
          counter = 0;

        $("#show-next-image, #show-previous-image").click(function() {
          if ($(this).attr("id") === "show-previous-image") {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

        function updateGallery(selector) {
          let $sel = selector;
          current_image = $sel.data("image-id");
          $("#image-gallery-title").text($sel.data("title"));
          $("#image-gallery-image").attr("src", $sel.data("image"));
          disableButtons(counter, $sel.data("image-id"));
        }

        if (setIDs == true) {
          $("[data-image-id]").each(function() {
            counter++;
            $(this).attr("data-image-id", counter);
          });
        }
        $(setClickAttr).on("click", function() {
          updateGallery($(this));
        });
      }
    });

    // build key actions
    $(document).keydown(function(e) {
      switch (e.which) {
        case 37: // left
          if (
            (modalId.data("bs.modal") || {})._isShown &&
            $("#show-previous-image").is(":visible")
          ) {
            $("#show-previous-image").click();
          }
          break;

        case 39: // right
          if (
            (modalId.data("bs.modal") || {})._isShown &&
            $("#show-next-image").is(":visible")
          ) {
            $("#show-next-image").click();
          }
          break;

        default:
          return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
    });
  }
};
</script>
