import { Navigate, Route, Routes } from 'react-router-dom';
import ManagerPage from './pages/Manager';
import Visualiser from './pages/Visualiser';
import Access from './pages/Access';
import Workflow from './pages/Workflow';
import Style from './pages/Style';
import Validation from './pages/Validation';
import Settings from './pages/Settings';
import Event from './pages/Event';
import { Container } from './styledComponents';

const App = () => (
    <Container>
        <Routes>
            <Route path="manager" element={<ManagerPage />} />
            <Route path="visualiser" element={<Visualiser />} />
            <Route path="access" element={<Access />} />
            <Route path="workflow" element={<Workflow />} />
            <Route path="style" element={<Style />} />
            <Route path="validation" element={<Validation />} />
            <Route path="settings" element={<Settings />} />
            <Route path="event" element={<Event />} />
            <Route path="*" element={<Navigate to="manager" />} />
        </Routes>
    </Container>
);

export default App;
