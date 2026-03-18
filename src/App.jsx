import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Train, 
  Plane, 
  Anchor, 
  Map, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Hotel, 
  Globe, 
  ChevronRight,
  LayoutDashboard,
  Compass,
  ArrowUpRight,
  Award,
  Layers,
  Star,
  Info,
  Activity,
  Zap,
  Navigation
} from 'lucide-react';

const COLORS = {
  primary: '#ff5d37',     // Naranja (Externo / Energía)
  secondary: '#105b46',   // Verde (Interno / Naturaleza)
  tertiary1: '#4b6db5',   // Azul (Cruceros)
  tertiary2: '#f0a748',   // Amarillo (Cultura)
  bg: '#050505',
  card: 'rgba(25, 25, 25, 0.7)',
  border: 'rgba(255, 255, 255, 0.1)'
};

const App = () => {
  const [activeTab, setActiveTab] = useState('mobility');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const stats = {
    totalTourists: "20.3M",
    economicImpact: "$19.5B",
    avgOccupancy: "78.4%",
    activeHotels: "1,345"
  };

  // Datos para Dashboard
  const mobilityData = [
    { name: 'Aéreo', total: 18452000, growth: '+5.2%', color: COLORS.primary, icon: <Plane size={18} /> },
    { name: 'Cruceros', total: 6480000, growth: '+12.1%', color: COLORS.tertiary1, icon: <Anchor size={18} /> },
    { name: 'Tren Maya', total: 482000, growth: 'Operativo', color: COLORS.secondary, icon: <Train size={18} /> },
  ];

  // Datos para pestaña Movilidad: Comparativa Interno vs Externo
  // Basado en sumatoria anualizada de los archivos Nacionales vs Internacionales
  const originComparison = {
    interno: {
      total: 7226800, // ~35.6%
      aereo: 4521000,
      tren: 410000,
      otros: 2295800,
      color: COLORS.secondary
    },
    externo: {
      total: 13073200, // ~64.4%
      aereo: 13931000,
      tren: 72000,
      cruceros: 6480000,
      color: COLORS.primary
    }
  };

  const archaeologicalData = [
    { site: 'Tulum', visitors: 150620, color: COLORS.tertiary2, trend: '+8%' },
    { site: 'Chacchoben', visitors: 29382, color: COLORS.tertiary2, trend: '+12%' },
    { site: 'Cobá', visitors: 25084, color: COLORS.tertiary2, trend: '+5%' },
    { site: 'San Gervasio', visitors: 23089, color: COLORS.tertiary2, trend: '-2%' },
    { site: 'Ichkabal', visitors: 5277, color: COLORS.tertiary2, trend: '+15%' },
    { site: 'El Rey', visitors: 4210, color: COLORS.tertiary2, trend: '+4%' },
    { site: 'El Meco', visitors: 3847, color: COLORS.tertiary2, trend: '+3%' },
    { site: 'Kohunlich', visitors: 3481, color: COLORS.tertiary2, trend: '+6%' },
    { site: 'Muyil', visitors: 2985, color: COLORS.tertiary2, trend: '+1%' },
    { site: 'Dzibanché', visitors: 1520, color: COLORS.tertiary2, trend: '+7%' },
    { site: 'Oxtankah', visitors: 1436, color: COLORS.tertiary2, trend: '+2%' },
    { site: 'Otras Zonas', visitors: 6412, color: COLORS.tertiary2, trend: 'Global', isTotal: true }
  ];

  const marketShare = [
    { country: 'Estados Unidos', share: 36.6, color: COLORS.primary },
    { country: 'México', share: 35.6, color: COLORS.secondary },
    { country: 'Canadá', share: 10.9, color: COLORS.tertiary1 },
    { country: 'Otros Mercados', share: 16.9, color: COLORS.tertiary2 }
  ];

  if (loading) {
    return (
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center font-sans">
        <div className="relative w-20 h-20 mb-4">
          <div className="absolute inset-0 border-4 border-[#ff5d37]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#ff5d37] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-white font-light tracking-[0.3em] text-[10px] animate-pulse uppercase">Descuubre Intelligence</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-[#ff5d37] antialiased">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#ff5d37] opacity-[0.05] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#105b46] opacity-[0.05] blur-[150px] rounded-full"></div>
      </div>

      <div className="flex h-screen relative z-10 overflow-hidden">
        <aside className="w-72 border-r border-white/5 bg-black/60 backdrop-blur-3xl flex flex-col p-8">
          <div className="flex items-center space-x-4 mb-16">
            <div className="w-12 h-12 bg-[#ff5d37] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,93,55,0.3)]">
              <Compass className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-black text-2xl tracking-tighter text-white uppercase">Descuubre</h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Intelligence</p>
            </div>
          </div>

          <nav className="flex-1 space-y-3">
            <NavItem active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <NavItem active={activeTab === 'mobility'} onClick={() => setActiveTab('mobility')} icon={<TrendingUp size={20} />} label="Movilidad 2026" />
            <NavItem active={activeTab === 'destinations'} onClick={() => setActiveTab('destinations')} icon={<Map size={20} />} label="Zonas Culturales" />
            <NavItem active={activeTab === 'hotels'} onClick={() => setActiveTab('hotels')} icon={<Hotel size={20} />} label="Hospedaje" />
          </nav>

          <div className="mt-auto">
            <div className="bg-white/5 border border-white/10 p-5 rounded-3xl">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                <span className="text-xs font-bold text-white uppercase tracking-widest">Live Node Sync</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto p-10 custom-scrollbar">
          <header className="flex justify-between items-center mb-12">
            <div>
              <p className="text-[#ff5d37] font-bold text-xs uppercase tracking-[0.2em] mb-2">Quintana Roo · Inteligencia</p>
              <h2 className="text-5xl font-black text-white tracking-tighter uppercase">
                {activeTab === 'dashboard' && 'Visión Caribe Global'}
                {activeTab === 'mobility' && 'Fronteras de Origen'}
                {activeTab === 'destinations' && 'Legado Arqueológico'}
                {activeTab === 'hotels' && 'Red de Hospitalidad'}
              </h2>
            </div>
            <div className="flex space-x-3 text-xs">
              <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl font-bold backdrop-blur-xl text-gray-400 uppercase tracking-widest">
                Status: <span className="text-green-400">Optimizado</span>
              </div>
              <div className="px-5 py-3 bg-[#ff5d37] rounded-2xl font-bold text-white shadow-xl hover:scale-105 transition-transform cursor-pointer uppercase">
                Exportar BI
              </div>
            </div>
          </header>

          {/* 1. DASHBOARD VIEW */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-12 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <KpiCard title="Turistas Anuales" value={stats.totalTourists} icon={<Users />} color="#ff5d37" span="col-span-3" trend="+4.1%" />
              <KpiCard title="Impacto Económico" value={stats.economicImpact} icon={<DollarSign />} color="#4b6db5" span="col-span-3" trend="+12%" />
              <KpiCard title="Ocupación Promedio" value={stats.avgOccupancy} icon={<TrendingUp />} color="#105b46" span="col-span-3" trend="+2.4%" />
              <KpiCard title="Oferta Hotelera" value={stats.activeHotels} icon={<Hotel />} color="#f0a748" span="col-span-3" trend="+18" />

              <div className="col-span-8 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md relative overflow-hidden group">
                <h3 className="text-2xl font-bold text-white tracking-tight uppercase mb-10">Movilidad Multimodal Anualizada</h3>
                <div className="h-80 flex items-end relative pb-10">
                  <div className="absolute left-0 top-0 bottom-24 w-12 flex flex-col justify-between text-[10px] font-bold text-gray-600 z-20">
                    <span>20M</span><span>15M</span><span>10M</span><span>5M</span><span className="text-gray-800">0</span>
                  </div>
                  <div className="flex-1 ml-12 relative h-full flex items-end justify-around px-4">
                    <div className="absolute inset-0 flex flex-col justify-between pb-10 opacity-10">
                      {[1, 2, 3, 4].map(line => <div key={line} className="w-full h-[1px] border-t border-dashed border-white"></div>)}
                    </div>
                    {mobilityData.map((item, idx) => {
                      const height = Math.max(20, (item.total / 20000000) * 280);
                      return (
                        <div key={idx} className="relative z-10 flex flex-col items-center group/bar w-32">
                          <div className="w-16 rounded-t-2xl transition-all duration-700 relative group-hover/bar:scale-x-110"
                            style={{ height: `${height}px`, backgroundColor: item.color, boxShadow: `0 -10px 40px ${item.color}33` }}>
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-white/40">{item.icon}</div>
                          </div>
                          <p className="mt-6 text-sm font-bold text-white uppercase tracking-tighter">{item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="col-span-4 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white tracking-tight uppercase mb-8">Origen de Flujo</h3>
                <div className="space-y-[1.2rem]">
                  {marketShare.map((market, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between text-[10px] mb-2 uppercase font-black tracking-widest text-gray-500">
                        <span>{market.country}</span><span>{market.share}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${market.share}%`, backgroundColor: market.color }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. NUEVA VISTA: MOVILIDAD INTERNO VS EXTERNO */}
          {activeTab === 'mobility' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
               {/* Gráfica de Barras Principal: Comparativa Global */}
               <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-12">
                    <div>
                      <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Volumen por Origen de Turista</h3>
                      <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-1">Comparativa Anualizada: Turismo Interno vs. Externo</p>
                    </div>
                    <Zap className="text-[#ff5d37] animate-pulse" size={32} />
                  </div>

                  <div className="flex items-center space-x-12">
                    {/* Tarjeta Interno */}
                    <div className="flex-1 p-10 bg-gradient-to-br from-[#105b46]/20 to-transparent border border-[#105b46]/30 rounded-[2.5rem] relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Navigation size={120} /></div>
                      <h4 className="text-gray-500 text-xs font-black uppercase tracking-[0.2em] mb-2">Turismo Interno</h4>
                      <p className="text-6xl font-black text-[#105b46] tracking-tighter uppercase">7.2M</p>
                      <p className="text-sm text-gray-400 mt-4 uppercase font-bold tracking-widest">Procedencia: México</p>
                      
                      <div className="mt-10 space-y-4">
                         <DetailRow label="Llegadas Aéreas" val="4.5M" color="#105b46" />
                         <DetailRow label="Uso Tren Maya" val="410K" color="#105b46" />
                         <DetailRow label="Otros (Terrestre)" val="2.3M" color="#105b46" />
                      </div>
                    </div>

                    {/* Tarjeta Externo */}
                    <div className="flex-1 p-10 bg-gradient-to-br from-[#ff5d37]/20 to-transparent border border-[#ff5d37]/30 rounded-[2.5rem] relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><Globe size={120} /></div>
                      <h4 className="text-gray-500 text-xs font-black uppercase tracking-[0.2em] mb-2">Turismo Externo</h4>
                      <p className="text-6xl font-black text-[#ff5d37] tracking-tighter uppercase">13.1M</p>
                      <p className="text-sm text-gray-400 mt-4 uppercase font-bold tracking-widest">Procedencia: Internacional</p>

                      <div className="mt-10 space-y-4">
                         <DetailRow label="Llegadas Aéreas" val="13.9M" color="#ff5d37" />
                         <DetailRow label="Arribo Cruceros" val="6.4M" color="#ff5d37" />
                         <DetailRow label="Uso Tren Maya" val="72K" color="#ff5d37" />
                      </div>
                    </div>
                  </div>
               </div>

               {/* Cuota de Mercado Visual (Barra de Progreso Dual) */}
               <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10">
                  <div className="flex justify-between text-xs font-black uppercase tracking-[0.3em] mb-6">
                    <span className="text-[#105b46]">Interno (35.6%)</span>
                    <span className="text-[#ff5d37]">Externo (64.4%)</span>
                  </div>
                  <div className="w-full h-8 bg-white/5 rounded-full overflow-hidden flex p-1">
                    <div className="h-full bg-[#105b46] rounded-l-full transition-all duration-1000 relative group" style={{ width: '35.6%' }}>
                       <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="h-full bg-[#ff5d37] rounded-r-full transition-all duration-1000 relative group" style={{ width: '64.4%' }}>
                       <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  <p className="text-center text-[10px] text-gray-500 mt-6 uppercase tracking-widest font-bold">Distribución total de movilidad anualizada en el Caribe Mexicano</p>
               </div>
            </div>
          )}

          {/* 3. DESTINATIONS (TOP 12) */}
          {activeTab === 'destinations' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-4 gap-6">
                {archaeologicalData.map((site, idx) => (
                  <div key={idx} className={`relative p-8 border border-white/10 rounded-[2rem] overflow-hidden group transition-all duration-500 ${site.isTotal ? 'bg-gradient-to-br from-[#f0a748]/20 to-transparent border-[#f0a748]/30' : 'bg-white/5 hover:bg-white/[0.08]'}`}>
                    <div className="absolute -top-4 -left-4 text-7xl font-black text-white/[0.03] select-none group-hover:text-white/[0.06] transition-colors">
                      {site.isTotal ? '∑' : idx + 1}
                    </div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${site.isTotal ? 'bg-[#f0a748] text-white shadow-[#f0a748]/20' : 'bg-[#f0a748]/10 text-[#f0a748] shadow-[#f0a748]/10'}`}>
                        {site.isTotal ? <Layers size={24} /> : idx === 0 ? <Award size={24} /> : <Map size={24} />}
                      </div>
                      <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${site.isTotal ? 'bg-white/10 text-white' : site.trend.startsWith('+') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                        {site.trend}
                      </span>
                    </div>
                    <h4 className="text-gray-500 text-xs font-black uppercase tracking-[0.2em] mb-1">{site.site}</h4>
                    <div className="flex items-baseline space-x-1">
                      <p className="text-3xl font-black text-white">{site.visitors.toLocaleString()}</p>
                      <span className="text-[10px] text-gray-600 font-bold uppercase">pax</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. HOSPEDAJE */}
          {activeTab === 'hotels' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
               <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-md relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <h3 className="text-3xl font-black text-white tracking-tighter uppercase flex items-center">
                        <Activity className="mr-3 text-[#ff5d37]" /> Eficiencia Operativa por Destino
                      </h3>
                      <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-1">Análisis 2026</p>
                    </div>
                    <p className="text-4xl font-black text-white tracking-tighter uppercase">78.4%</p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-20 gap-y-10">
                     <OccupancyRow label="Costa Mujeres" val={85.7} trend="+1.2%" />
                     <OccupancyRow label="Isla Mujeres" val={85.4} trend="+0.8%" />
                     <OccupancyRow label="Cancún" val={83.1} trend="+2.1%" />
                     <OccupancyRow label="Playa del Carmen" val={82.2} trend="+1.5%" />
                     <OccupancyRow label="Corredor Riviera" val={81.8} trend="+0.5%" />
                     <OccupancyRow label="Tulum" val={80.5} trend="-0.4%" />
                  </div>
               </div>

               <div className="grid grid-cols-4 gap-6">
                 <HotelCatGridCard title="5 Estrellas" stars={5} count={242} leader="Cancún" color={COLORS.primary} share="18%" />
                 <HotelCatGridCard title="4 Estrellas" stars={4} count={318} leader="Riviera Maya" color={COLORS.tertiary2} share="23.6%" />
                 <HotelCatGridCard title="Boutique / Airbnb" stars={0} count={394} leader="Tulum" color={COLORS.tertiary1} share="29.3%" isBoutique />
                 <div className="col-span-1 bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-center items-center">
                    <p className="text-[10px] text-gray-500 uppercase font-black mb-2">Total Unidades</p>
                    <p className="text-5xl font-black text-white">1,345</p>
                 </div>
               </div>
            </div>
          )}
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #ff5d37; }
        .animate-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

// COMPONENTES DE APOYO

const NavItem = ({ active, icon, label, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-500 group relative ${
    active ? 'bg-[#ff5d37] text-white shadow-xl shadow-[#ff5d37]/20' : 'text-gray-500 hover:text-white hover:bg-white/5'
  }`}>
    <div className={`${active ? 'scale-110' : 'group-hover:scale-110'} transition-transform`}>{icon}</div>
    <span className="font-bold text-sm uppercase tracking-tighter">{label}</span>
    {active && <div className="absolute right-4 w-1.5 h-1.5 bg-white rounded-full"></div>}
  </button>
);

const KpiCard = ({ title, value, icon, color, span, trend }) => (
  <div className={`${span} bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-500 group`}>
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform" style={{ color }}>{icon}</div>
      <span className="text-[10px] font-black text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">{trend}</span>
    </div>
    <h4 className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{title}</h4>
    <p className="text-4xl font-black text-white mt-2 tracking-tighter uppercase">{value}</p>
  </div>
);

const DetailRow = ({ label, val, color }) => (
  <div className="flex justify-between items-center py-2 border-b border-white/5 group/row">
    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest group-hover/row:text-gray-300 transition-colors">{label}</span>
    <div className="flex items-center space-x-2">
       <span className="text-sm font-black text-white">{val}</span>
       <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }}></div>
    </div>
  </div>
);

const OccupancyRow = ({ label, val, trend }) => (
  <div className="space-y-3 group cursor-default">
    <div className="flex justify-between items-end">
      <span className="font-black text-white text-sm uppercase tracking-tighter group-hover:text-[#ff5d37] transition-colors">{label}</span>
      <div className="text-right">
        <span className="font-black text-white mr-2">{val}%</span>
        <span className={`text-[10px] font-bold ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{trend}</span>
      </div>
    </div>
    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden relative border border-white/5">
      <div className="h-full bg-gradient-to-r from-[#105b46] to-[#4b6db5] rounded-full transition-all duration-1000 ease-out relative" style={{ width: `${val}%` }}>
        <div className="absolute top-0 right-0 w-1 h-full bg-white/40 blur-sm"></div>
      </div>
    </div>
  </div>
);

const HotelCatGridCard = ({ title, stars, count, leader, color, share, isBoutique }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden group hover:bg-white/[0.08] transition-all duration-500">
    <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04] blur-3xl -mr-10 -mt-10 transition-opacity" style={{ backgroundColor: color }}></div>
    <div className="flex justify-between items-start mb-6">
      <div className="flex space-x-1">
        {isBoutique ? <Award size={18} className="text-white" /> : Array.from({ length: 5 }).map((_, i) => <Star key={i} size={10} className={i < stars ? "fill-white text-white" : "text-gray-700"} />)}
      </div>
    </div>
    <h4 className="text-gray-500 text-xs font-black uppercase tracking-[0.2em] mb-1">{title}</h4>
    <p className="text-3xl font-black text-white">{count}</p>
    <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center"><span className="text-[10px] text-gray-500 font-bold uppercase">Líder:</span><span className="text-[10px] font-black text-white uppercase">{leader}</span></div>
  </div>
);

export default App;
