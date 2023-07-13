import React from "react";
import { Plus1 } from "../../icons/Plus1";
import "./style_main.css";
import Select from "react-select";

const options = [{
  value: 'международная',
  label: 'Международная'
},{
  value: 'всероссийская',
  label: 'Всероссийская'
},{
  value: 'региональная',
  label: 'Региональная'
},{
  value: 'областная',
  label: 'Областная'
},{
  value: 'межвузовская',
  label: 'Межвузовская'
},{
  value: 'вузовская',
  label: 'Вузовская'
}]

export default function Main() {
  return (
    <div className="main">
      <div className="main-px">
        <div className="div">
          <div className="view">
            <img
              className="group"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/97ac5242845392362762eee06fd7b006/img/group-212@2x.png"
            />
            <div className="text-wrapper">Все разделы</div>
          </div>
          <div className="view-2">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Сохранить изменения</div>
            </div>
            <div className="view-3">
              <p className="text-wrapper-3">Достижения до поступления в университет</p>
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <dif className="p" >
                    <input className="input_style_fir" type="text" placeholder="Укажите информацию о достижениях в учебной, научно-исследовательской, общественной, культурно
                      творческой и спортивной деятельности" />
                  </dif>
                </div>
              </div>
            </div>
            <div className="view-4">
              <div className="overlap">
                <div className="frame">
                  <input hidden type="checkbox" class="custom-checkbox" id="public1" value="yes" />
                  <label className="text-wrapper-4" for="public1">Общедоступно</label>
                </div>
                <div className="frame-2">
                  <div className="group-2">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-5">Дата рождения</div>
                      <input hidden type="checkbox" class="custom-checkbox" id="public13" value="yes" />
                      <label className="text-wrapper-4_alt" for="public13"></label>
                    </div>
                  </div>
                  <div className="group-2">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-5_long">
                        <input className="input_style_light" type="text" placeholder="Адрес" />
                      </div>
                      <input hidden type="checkbox" class="custom-checkbox" id="public14" value="yes" />
                      <label className="text-wrapper-4_alt" for="public14"></label>
                    </div>
                  </div>
                  <div className="group-2">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-5">Телефон</div>
                      <input hidden type="checkbox" class="custom-checkbox" id="public15" value="yes" />
                      <label className="text-wrapper-4_alt" for="public15"></label>
                    </div>
                  </div>
                  <div className="group-2">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-5">E-mail</div>
                      <input hidden type="checkbox" class="custom-checkbox" id="public16" value="yes" />
                      <label className="text-wrapper-4_alt" for="public16"></label>
                    </div>
                  </div>
                  <div className="group-2">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-5">Год поступления</div>
                      <input hidden type="checkbox" class="custom-checkbox" id="public17" value="yes" />
                      <label className="text-wrapper-4_alt" for="public17"></label>
                    </div>
                  </div>
                  <div className="group-2">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-5">
                        <input className="input_style_light" type="text" placeholder="Год окончания" />
                      </div>
                      <input hidden type="checkbox" class="custom-checkbox" id="public18" value="yes" />
                      <label className="text-wrapper-4_alt" for="public18"></label>
                    </div>
                  </div>
                  <div className="group-2">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-5">Фото</div>
                      <input hidden type="checkbox" class="custom-checkbox" id="public19" value="yes" />
                      <label className="text-wrapper-4_alt" for="public19"></label>
                    </div>
                  </div>
                  <div className="overlap-wrapper">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-5_long">
                        <input className="input_style_light" type="text" placeholder="Дополнительная информация" />
                      </div>
                      <input hidden type="checkbox" class="custom-checkbox" id="public20" value="yes" />
                      <label className="text-wrapper-4_alt" for="public20"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-6">Дополнительная информация</div>
            </div>
            <div className="view-5">
              <div className="group-3">
                <div className="text-wrapper-7">Внеучебная деятельность</div>
              </div>
              <div className="frame-4">
                <div className="group-4">
                  <div className="frame-5">
                    <div className="text-wrapper-8">
                      Общественная, творческая
                      <br />и спортивная деятельность
                    </div>
                  </div>
                  <div className="frame-6">
                    <div className="group-5">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Наименование мероприятия" />
                        </div>
                      </div>
                    </div>
                    <div className="group-6">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Место проведения" />
                        </div>
                      </div>
                    </div>
                    <div className="group-7">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Дата проведения (дд.мм.гггг)" />
                        </div>
                      </div>
                    </div>
                    <div className="group-8">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Дата окончания (дд.мм.гггг)" />
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="frame-7">
                        <div className="text-wrapper-4">
                          <label for="files" class="btn">Выберите файл</label>
                          <p className="text-wrapper-9">pdf, png, jpg, doc, docx - не более 10 Мб</p>

                          <input hidden id="files" type="file"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-8">
                    <div className="frame-9">
                      <div className="frame-10">
                        <div className="text-wrapper-4">Удалить</div>
                        <div className="rectangle-3" />
                      </div>
                    </div>
                    <div className="frame-11">
                      <input hidden type="checkbox" class="custom-checkbox" id="public2" value="yes" />
                      <label className="text-wrapper-4" for="public2">Общедоступно</label>
                    </div>
                  </div>
                </div>
                <div className="group-9">
                  <div className="frame-12">
                    <div className="frame-9">
                      <div className="frame-10">
                        <div className="text-wrapper-4">Удалить</div>
                        <div className="rectangle-3" />
                      </div>
                    </div>
                    <div className="frame-11">
                      <input hidden type="checkbox" class="custom-checkbox" id="public3" value="yes" />
                      <label className="text-wrapper-4" for="public3">Общедоступно</label>
                    </div>
                  </div>
                  <div className="group-10">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-5_long">
                        <input className="input_style_light" type="text" placeholder="Укажите другие достижения в культурно-творческой и спортивной деятельности" />
                      </div>
                    </div>
                  </div>
                  <div className="frame-13">
                    <p className="text-wrapper-11">Другие достижения во внеучебной деятельности</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-2">
              <div className="text-wrapper-7">Научно-исследовательская деятельность</div>
              <div className="frame-4">
                <div className="group-11">
                  <div className="frame-14">
                    <p className="text-wrapper-4">Научные труды и учебные издания</p>
                  </div>
                  <div className="frame-15">
                    <div className="group-5">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Наименование учебных изданий, другое" />
                        </div>
                      </div>
                    </div>
                    <div className="group-6">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Форма учебных изданий и научных трудов" />
                        </div>
                      </div>
                    </div>
                    <div className="group-7">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Выходные данные" />
                        </div>
                      </div>
                    </div>
                    <div className="group-8">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Объем в п.л или с." />
                        </div>
                      </div>
                    </div>
                    <div className="group-12">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Соавторы" />
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="frame-7">
                        <div className="text-wrapper-4">
                          <label for="files" class="btn">Выберите файл</label>
                          <div className="text-wrapper-9">pdf, png, jpg, doc, docx - не более 10 Мб</div>
                          <input hidden id="files" type="file"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-16">
                    <div className="frame-9">
                      <div className="frame-17">
                        <div className="text-wrapper-4">Удалить</div>
                        <div className="rectangle-3" />
                      </div>
                    </div>
                    <div className="frame-11">
                      <input hidden type="checkbox" class="custom-checkbox" id="public4" value="yes" />
                      <label className="text-wrapper-4" for="public4">Общедоступно</label>
                    </div>
                  </div>
                </div>
                <div className="group-13">
                  <div className="frame-18">
                    <p className="text-wrapper-4">Участие в выставках, проектах, конкурсах</p>
                  </div>
                  <div className="frame-19">
                    <div className="frame-9">
                      <div className="frame-17">
                        <div className="text-wrapper-4">Удалить</div>
                        <div className="rectangle-3" />
                      </div>
                    </div>
                    <div className="frame-11">
                      <input hidden type="checkbox" class="custom-checkbox" id="public5" value="yes" />
                      <label className="text-wrapper-4" for="public5">Общедоступно</label>
                    </div>
                  </div>
                  <div className="frame-20">
                    <div className="group-14">
                      <div className="overlap-group-5">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Тема конференции" />
                        </div>
                      </div>
                    </div>
                    <div className="group-15">
                      <div className="overlap-2">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Место проведения" />
                        </div>
                      </div>
                    </div>
                    <div className="group-16">
                      <div className="overlap-3">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Дата проведения" />
                        </div>
                      </div>
                    </div>
                    <div className="group-17">
                      <div className="overlap-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Дата окончания" />
                        </div>
                      </div>
                    </div>
                    <div className="group-12">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">Статус конференции</div>
                        <Select options={options} classNamePrefix="fir-select" placeholder='Выберите статус'/>
                      </div>
                    </div>
                    <div className="group-18">
                      <div className="overlap-5">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Тема доклада" />
                        </div>
                      </div>
                    </div>
                    <div className="group-19">
                      <div className="frame-7">
                        <div className="text-wrapper-4">
                          <label for="files" class="btn">Выберите файл</label>
                          <div className="text-wrapper-9">pdf, png, jpg, doc, docx - не более 10 Мб</div>
                          <input hidden id="files" type="file"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-20">
                  <div className="frame-21">
                    <input hidden type="checkbox" class="custom-checkbox" id="public6" value="yes" />
                    <label className="text-wrapper-4" for="public6">Общедоступно</label>
                  </div>
                  <div className="frame-22">
                    <div className="frame-17">
                      <div className="text-wrapper-4">Удалить</div>
                      <div className="rectangle-3" />
                    </div>
                  </div>
                  <div className="frame-23">
                    <div className="group-5">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Тема" />
                        </div>
                      </div>
                    </div>
                    <div className="group-6">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Руководитель" />
                        </div>
                      </div>
                    </div>
                    <div className="group-7">
                      <div className="overlap-group-4">
                        <div className="text-wrapper-5">
                          <input className="input_style_light" type="text" placeholder="Должность гранта" />
                        </div>
                      </div>
                    </div>
                    <div className="group-21">
                      <div className="frame-7">
                        <div className="text-wrapper-4">
                          <label for="files" class="btn">Выберите файл</label>
                          <div className="text-wrapper-9">pdf, png, jpg, doc, docx - не более 10 Мб</div>
                          <input hidden id="files" type="file"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-24">
                    <div className="text-wrapper-4">Гранты</div>
                  </div>
                </div>
                <div className="group-22">
                  <div className="frame-25">
                    <div className="frame-9">
                      <div className="frame-17">
                        <div className="text-wrapper-4">Удалить</div>
                        <div className="rectangle-3" />
                      </div>
                    </div>
                    <div className="frame-11">
                      <input hidden type="checkbox" class="custom-checkbox" id="public7" value="yes" />
                      <label className="text-wrapper-4" for="public7">Общедоступно</label>
                    </div>
                  </div>
                  <div className="group-23">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-5_long">
                        <input className="input_style_light" type="text" placeholder="Укажите другие достижения в научной работе" />
                      </div>
                    </div>
                  </div>
                  <div className="frame-26">
                    <p className="text-wrapper-4">Другие достижения в научной работе</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-6">
              <div className="text-wrapper-7">Учебная деятельность</div>
              <div className="group-24">
                <div className="frame-27">
                  <div className="text-wrapper-4">Отчеты по практике</div>
                </div>
                <div className="frame-23">
                  <div className="group-5">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-5">
                        <input className="input_style_light" type="text" placeholder="Курс" />
                      </div>
                    </div>
                  </div>
                  <div className="group-6">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-5">
                        <input className="input_style_light" type="text" placeholder="Вид практики" />
                      </div>
                    </div>
                  </div>
                  <div className="group-7">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-5">
                        <input className="input_style_light" type="text" placeholder="Место прохождения (предприятие, город)" />
                      </div>
                    </div>
                  </div>
                  <div className="group-8">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-5">
                        <input className="input_style_light" type="text" placeholder="Оценка" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-25">
                  <div className="frame-7">
                    <div className="text-wrapper-4">
                      <label for="files" class="btn">Выберите файл</label>
                      <div className="text-wrapper-9">pdf, png, jpg, doc, docx - не более 10 Мб</div>
                      <input hidden id="files" type="file"/>
                    </div>
                  </div>
                </div>
                <div className="frame-28">
                  <div className="frame-17">
                    <div className="text-wrapper-4">Удалить</div>
                    <div className="rectangle-3" />
                  </div>
                </div>
                <div className="frame-29">
                  <input hidden type="checkbox" class="custom-checkbox" id="public8" value="yes" />
                  <label className="text-wrapper-4" for="public8">Общедоступно</label>
                </div>
              </div>
              <div className="group-26">
                <div className="frame-30">
                  <p className="text-wrapper-4">Курсовые работы, проекты (КР, КП)</p>
                </div>
                <div className="frame-23">
                  <div className="group-5">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-5">
                        <input className="input_style_light" type="text" placeholder="Дисциплина" />
                      </div>
                    </div>
                  </div>
                  <div className="group-6">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-5">
                        <input className="input_style_light" type="text" placeholder="Тема КР, КП" />
                      </div>
                    </div>
                  </div>
                  <div className="group-7">
                    <div className="overlap-group-4">
                      <div className="text-wrapper-5">
                        <input className="input_style_light" type="text" placeholder="Оценка" />
                      </div>
                    </div>
                  </div>
                  <div className="group-21">
                    <div className="frame-7">
                      <div className="text-wrapper-4">
                        <label for="files" class="btn">Выберите файл</label>
                        <div className="text-wrapper-9">pdf, png, jpg, doc, docx - не более 10 Мб</div>
                        <input hidden id="files" type="file"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-31">
                  <div className="frame-9">
                    <div className="frame-17">
                      <div className="text-wrapper-4">Удалить</div>
                      <div className="rectangle-3" />
                    </div>
                  </div>
                  <div className="frame-11">
                    <input hidden type="checkbox" class="custom-checkbox" id="public9" value="yes" />
                    <label className="text-wrapper-4" for="public9">Общедоступно</label>
                  </div>
                </div>
              </div>
              <div className="group-27">
                <div className="frame-32">
                  <div className="text-wrapper-4">Выпускная квалификационная работа</div>
                </div>
                <div className="frame-33">
                  <div className="frame-9">
                    <div className="frame-17">
                      <div className="text-wrapper-4">Удалить</div>
                      <div className="rectangle-3" />
                    </div>
                  </div>
                  <div className="frame-11">
                    <input hidden type="checkbox" class="custom-checkbox" id="public10" value="yes" />
                    <label className="text-wrapper-4" for="public10">Общедоступно</label>
                  </div>
                </div>
                <div className="group-25">
                  <div className="frame-7">
                    <div className="text-wrapper-4">
                      <label for="files" class="btn">Выберите файл</label>
                      <div className="text-wrapper-9">pdf, png, jpg, doc, docx - не более 10 Мб</div>
                      <input hidden id="files" type="file"/>
                    </div>
                  </div>
                </div>
                <div className="group-28">
                  <div className="overlap-group-4">
                    <div className="text-wrapper-5">
                      <input className="input_style_light" type="text" placeholder="Тема ВКР" />
                    </div>
                  </div>
                </div>
                <div className="group-29">
                  <div className="overlap-6">
                    <div className="text-wrapper-5">
                      <input className="input_style_light" type="text" placeholder="Рецензия" />
                    </div>
                  </div>
                </div>
                <div className="group-30">
                  <div className="overlap-group-4">
                    <div className="text-wrapper-5">
                      <input className="input_style_light" type="text" placeholder="Оценка" />
                    </div>
                  </div>
                </div>
                <div className="group-31">
                  <div className="overlap-group-4">
                    <div className="text-wrapper-5">
                      <input className="input_style_light" type="text" placeholder="Руководитель ВКР (ФИО, должность)" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-32">
                <div className="frame-34">
                  <input hidden type="checkbox" class="custom-checkbox" id="public11" value="yes" />
                  <label className="text-wrapper-4" for="public11">Общедоступно</label>
                </div>
                <div className="frame-35">
                  <div className="frame-17">
                    <div className="text-wrapper-4">Удалить</div>
                    <div className="rectangle-3" />
                  </div>
                </div>
                <div className="group-23">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-5_long">
                      <input className="input_style_light" type="text" placeholder="Укажите другие достижения в учебной работе" />
                    </div>
                  </div>
                </div>
                <div className="frame-27">
                  <div className="text-wrapper-4">Другие достижения</div>
                </div>
              </div>
            </div>
            <div className="view-7">
              <div className="text-wrapper-3">Мои личные качества</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="text-wrapper-5_long">
                    <input className="input_style_fir" type="text" placeholder="Укажите свои личные качества" />
                  </div>
                </div>
              </div>
            </div>
            <div className="view-8">
              <div className="div-3">
                <span className="span">*&nbsp;&nbsp;</span>
                <span className="text-wrapper-15">Выпускающая кафедра</span>
              </div>
              <div className="group-33">
                <div className="overlap-group-6">
                  <div className="text-wrapper-5_long" >
                    <input className="input_style_fir" type="text" placeholder="Укажите название выпускающей кафедры" />
                  </div>
                </div>
              </div>
            </div>
            <div className="view-9">
              <h1 className="h-1">Мое портфолио</h1>
              <div className="frame-36">
                <p className="text-wrapper-16">
                  Портфолио – это эффективный способ <br />
                  рационального и прозрачного продвижения настоящих и будущих профессионалов на рынке труда, способ
                  оценивания имеющихся у них ключевых и иных компетенций, а также перспектив делового, профессионального
                  и творческого взаимодействия работодателя с ними.
                </p>
                <p className="text-wrapper-17">
                  *Разделы портфолио (кроме выпускающей кафедры) заполняются по желанию.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
