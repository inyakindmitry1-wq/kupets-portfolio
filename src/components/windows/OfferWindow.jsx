import Window from '../Window';

export default function OfferWindow({ isOpen, onClose }) {
  return (
    <Window title="Договор оферты" isOpen={isOpen} onClose={onClose} width="w-full max-w-2xl">
      <div className="space-y-5 text-gray-700 text-xs sm:text-sm font-normal">
        <div className="pb-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Публичная оферта на оказание услуг</h2>
          <p className="text-xs text-gray-500 mt-1">
            Исполнитель: Самозанятый Инякин Дмитрий Денисович (ИНН: 392101429606)
          </p>
        </div>

        <section className="space-y-2">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">1. Предмет оферты</h3>
          <p>
            Настоящий документ является официальным предложением (публичной офертой) Исполнителя (Самозанятый Инякин Дмитрий Денисович, ИНН 392101429606) для физических и юридических лиц о предоставлении профессиональных услуг в сфере веб-разработки, верстки, программирования и дизайна интерфейсов.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">2. Описание оказываемых услуг</h3>
          <p>
            Исполнитель оказывает Заказчику следующие виды услуг в соответствии с индивидуально согласованным техническим заданием:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Проектирование и разработка пользовательских интерфейсов (Frontend);</li>
            <li>Создание интерактивных веб-приложений и веб-сайтов под ключ;</li>
            <li>Адаптивная верстка, оптимизация производительности и рефакторинг кода.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">3. Порядок оплаты и сдачи-приемки работ</h3>
          <p>
            Условия и стоимость оказываемых услуг определяются сторонами индивидуально в зависимости от объема и сложности работ на основании предварительного согласования (сметы/брифа/технического задания).
          </p>
          <p>
            Оплата производится по безналичному расчету или через банковский перевод на основании выставляемого Исполнителем счета/чека физического лица, применяющего специальный налоговый режим «Налог на профессиональный доход» (Самозанятый).
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">4. Статус Исполнителя и налоговый режим</h3>
          <p>
            Исполнитель осуществляет деятельность в статусе плательщика Налога на профессиональный доход (НПД) в соответствии с Федеральным законом № 422-ФЗ. После получения оплаты Заказчику предоставляется официальный чек из приложения «Мой налог».
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">5. Ответственность и авторские права</h3>
          <p>
            Все исключительные имущественные права на результаты разработанного программного кода и дизайна передаются Заказчику в полном объеме после 100% оплаты согласованной стоимости услуг. Исполнитель не несет ответственности за косвенные убытки или нарушения, возникшие в результате некорректной эксплуатации ПО третьими лицами после передачи результатов работ.
          </p>
        </section>

        <div className="pt-4 border-t border-gray-200 text-xs text-gray-500 space-y-1">
          <div className="font-semibold text-gray-800">Реквизиты исполнителя:</div>
          <div>Самозанятый: Инякин Дмитрий Денисович</div>
          <div>ИНН: 392101429606</div>
          <div>Email: inyakindmitry1@gmail.com</div>
          <div>Telegram: @kupetsnovgorodny</div>
        </div>
      </div>
    </Window>
  );
}
