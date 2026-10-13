import Window from '../Window';

export default function PrivacyWindow({ isOpen, onClose }) {
  return (
    <Window title="Политика конфиденциальности" isOpen={isOpen} onClose={onClose} width="w-full max-w-2xl">
      <div className="space-y-5 text-gray-700 text-xs sm:text-sm font-normal">
        <div className="pb-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Политика конфиденциальности</h2>
          <p className="text-xs text-gray-500 mt-1">
            Исполнитель: Самозанятый Инякин Дмитрий Денисович (ИНН: 392101429606)
          </p>
        </div>

        <section className="space-y-2">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">1. Общие положения</h3>
          <p>
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты информации о физических лицах (далее — Пользователи), которая может быть получена Самозанятым Инякиным Дмитрием Денисовичем (ИНН: 392101429606) в процессе использования данного портфолио-сайта и обращения к Исполнителю за оказанием услуг.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">2. Сбор и состав персональных данных</h3>
          <p>
            Исполнитель осуществляет сбор исключительно минимального объема данных, необходимых для обратной связи и коммуникации:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Имя или никнейм Пользователя;</li>
            <li>Контактные данные (адрес электронной почты, логин в Telegram);</li>
            <li>Текст обращения или технического задания на веб-разработку.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">3. Цели обработки данных</h3>
          <p>
            Персональные данные Пользователя обрабатываются исключительно в целях:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>Установления обратной связи по вопросам оказания услуг веб-разработки;</li>
            <li>Согласования технических требований, стоимости и сроков выполнения проектов;</li>
            <li>Заключения договоров и выставления чеков/счетов.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">4. Неразглашение третьим лицам</h3>
          <p>
            Исполнитель гарантирует полную конфиденциальность полученных сведений. Персональные данные Пользователей строго не передаются, не продаются и не разглашаются третьим лицам, за исключением случаев, прямо предусмотренных действующим законодательством Российской Федерации.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">5. Права Пользователя</h3>
          <p>
            Пользователь вправе в любой момент запросить удаление или изменение своих персональных данных, направив соответствующее обращение на электронную почту Исполнителя: <a href="mailto:inyakindmitry1@gmail.com" className="text-blue-600 underline">inyakindmitry1@gmail.com</a>.
          </p>
        </section>

        <div className="pt-4 border-t border-gray-200 text-xs text-gray-400 text-center">
          Дата последнего обновления: 12 августа 2026 г.
        </div>
      </div>
    </Window>
  );
}
