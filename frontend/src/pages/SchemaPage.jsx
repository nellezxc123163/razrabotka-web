import OntologyGraph from '../components/OntologyGraph';

const SchemaPage = () => (
  <div>
    <h1 style={{ fontSize: 22, marginBottom: 8 }}>🕸️ Схема базы знаний</h1>
    <p style={{ color: '#666', marginBottom: 16 }}>
      Сущности (классы) и связи между ними. Центральная сущность — «Блюдо».
    </p>
    <OntologyGraph />
  </div>
);

export default SchemaPage;
