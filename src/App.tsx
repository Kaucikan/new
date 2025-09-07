import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from '../src/components/Login'
import Signup from '../src/components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaxReportForm from './components/TaxReportForm'
import Dashboard from './components/Dashboard'
import Calculator from './components/Calculator'
import AutoFillTaxForm from './components/AutoFillTaxForm'
import BankSecurityInfo from './components/BankSecurityInfo'
import Aiadvisor from './components/Aiadvisor'
import ExportReports from './components/ExportReports'
import SmartReminders from './components/SmartReminders'
import AboutWebsite from './components/AboutWebsite'


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path='/register' element = {<Signup/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
          <Route path='/taxReportForm' element = {<TaxReportForm/>}></Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/autofill" element={<AutoFillTaxForm/>} />
            <Route path="/bankInfo" element={<BankSecurityInfo/>} />
            <Route path="/ai" element={<Aiadvisor/>} />
            <Route path="/ExportReport" element={<ExportReports/>} />
            <Route path="/SmartReminders" element={<SmartReminders/>} />
            <Route path="/AboutWebsite" element={<AboutWebsite/>} />
            



        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
