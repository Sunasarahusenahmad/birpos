"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PackagePlus,
  AlertTriangle,
  Barcode,
  PlusCircle,
  Truck,
  Hash,
  Check,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";

type Product = {
  id: string;
  name: string;
  sku: string;
  category: string;
  costPrice: number;
  salePrice: number;
  stock: number;
  minStockAlert: number;
  unit: string;
  hasSerial: boolean;
};

const INITIAL_CATALOG: Product[] = [
  {
    id: "p1",
    name: "OnePlus Nord CE 4 (8GB / 128GB)",
    sku: "89043210091",
    category: "Mobile & Electronics",
    costPrice: 21000,
    salePrice: 24999,
    stock: 6,
    minStockAlert: 5,
    unit: "Pcs",
    hasSerial: true,
  },
  {
    id: "p2",
    name: "Tata Tea Gold 1kg Poly Pack",
    sku: "89010500123",
    category: "Grocery & FMCG",
    costPrice: 480,
    salePrice: 560,
    stock: 4,
    minStockAlert: 10,
    unit: "Pcs",
    hasSerial: false,
  },
  {
    id: "p3",
    name: "Asian Paints Royale Luxury 4L",
    sku: "89020014022",
    category: "Hardware & Paint",
    costPrice: 1950,
    salePrice: 2350,
    stock: 18,
    minStockAlert: 8,
    unit: "Box",
    hasSerial: false,
  },
];

export function InventorySimulator() {
  const [products, setProducts] = useState<Product[]>(INITIAL_CATALOG);
  const [selectedProduct, setSelectedProduct] = useState<Product>(INITIAL_CATALOG[0]);
  const [stockInUnits, setStockInUnits] = useState(10);
  const [supplierName, setSupplierName] = useState("National Electronics Wholesalers");
  const [supplierDue, setSupplierDue] = useState(42000);
  const [showStockInSuccess, setShowStockInSuccess] = useState(false);
  const [serialTracking, setSerialTracking] = useState(true);

  const handleStockIn = () => {
    const costAddition = selectedProduct.costPrice * stockInUnits;
    setProducts((prev) =>
      prev.map((p) => (p.id === selectedProduct.id ? { ...p, stock: p.stock + stockInUnits } : p))
    );
    setSelectedProduct((prev) => ({ ...prev, stock: prev.stock + stockInUnits }));
    setSupplierDue((prev) => prev + costAddition);
    setShowStockInSuccess(true);
    setTimeout(() => setShowStockInSuccess(false), 3000);
  };

  const handleStockSlider = (val: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === selectedProduct.id ? { ...p, stock: val } : p))
    );
    setSelectedProduct((prev) => ({ ...prev, stock: val }));
  };

  const isLowStock = selectedProduct.stock <= selectedProduct.minStockAlert;

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white shadow-[var(--shadow-lifted)]">
      {/* Title Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-border bg-surface-muted px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
            <Barcode className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-foreground sm:text-sm">
              BirStock Inventory Master &amp; Stock Inward Engine
            </h4>
            <p className="text-[0.68rem] text-muted-foreground">
              Real-time local embedded stock ledger · Zero internet needed
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
            Supplier Due: &#8377;{supplierDue.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-[1.1fr_1fr] lg:divide-x lg:divide-y-0">
        {/* Left Column: Product Selection & Catalog */}
        <div className="p-4 sm:p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Inventory Catalog (Select Item to Inspect)
            </span>
            <span className="text-xs text-primary font-semibold">{products.length} Products Tracked</span>
          </div>

          <div className="space-y-2.5">
            {products.map((p) => {
              const isSelected = p.id === selectedProduct.id;
              const isLow = p.stock <= p.minStockAlert;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setSelectedProduct(p);
                    setSerialTracking(p.hasSerial);
                  }}
                  className={`w-full rounded-lg border p-3.5 text-left transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-xs"
                      : "border-border bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold text-foreground sm:text-sm">{p.name}</p>
                      <p className="font-mono text-[0.68rem] text-muted-foreground">
                        SKU: {p.sku} · {p.category}
                      </p>
                    </div>
                    {isLow ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-[0.65rem] font-bold text-red-700">
                        <AlertTriangle className="h-3 w-3" /> Low Stock
                      </span>
                    ) : (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-800">
                        In Stock
                      </span>
                    )}
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2 text-xs">
                    <span className="text-muted-foreground">
                      Cost: &#8377;{p.costPrice.toLocaleString("en-IN")} | Sell: &#8377;{p.salePrice.toLocaleString("en-IN")}
                    </span>
                    <span className="font-bold text-foreground">
                      Current Stock: <span className={isLow ? "text-red-600" : "text-emerald-700"}>{p.stock} {p.unit}</span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Stock Level Adjuster */}
          <div className="mt-6 rounded-lg border border-border bg-surface-muted p-3.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-foreground">Simulate Stock Drain / Sell Units:</span>
              <span className="font-extrabold text-primary">{selectedProduct.stock} {selectedProduct.unit}</span>
            </div>
            <input
              type="range"
              min={0}
              max={30}
              value={selectedProduct.stock}
              onChange={(e) => handleStockSlider(Number(e.target.value))}
              className="mt-2 w-full cursor-pointer accent-primary"
            />
            <div className="mt-1 flex justify-between text-[0.65rem] text-muted-foreground">
              <span>0 (Empty Out)</span>
              <span className="text-red-600 font-semibold">Min Alert Threshold: {selectedProduct.minStockAlert} {selectedProduct.unit}</span>
              <span>30 units</span>
            </div>
          </div>
        </div>

        {/* Right Column: Stock Inward (Purchase Bill) & Serial Tracking */}
        <div className="flex flex-col justify-between bg-slate-50/60 p-4 sm:p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Stock Inward (Purchase Invoice)
              </span>
              <span className="flex items-center gap-1 text-[0.7rem] font-semibold text-primary">
                <PackagePlus className="h-3.5 w-3.5" /> Direct Stock In
              </span>
            </div>

            {/* Selected Product Card */}
            <div className="rounded-lg border border-border bg-white p-3 shadow-xs">
              <p className="text-[0.7rem] text-muted-foreground uppercase font-bold">Target Product</p>
              <p className="mt-0.5 text-xs font-extrabold text-foreground">{selectedProduct.name}</p>
              
              <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-2 text-xs">
                <span className="text-muted-foreground">Cost per unit:</span>
                <span className="font-bold text-foreground">&#8377;{selectedProduct.costPrice.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Serial / IMEI Toggle */}
            <div className="flex items-center justify-between rounded-lg border border-border bg-white p-3 shadow-xs">
              <div className="flex items-center gap-2">
                <Hash className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs font-bold text-foreground">Serial / IMEI Tracking</p>
                  <p className="text-[0.65rem] text-muted-foreground">Required for warranty &amp; electronics</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSerialTracking(!serialTracking)}
                className={`h-5 w-9 rounded-full transition-colors ${
                  serialTracking ? "bg-primary" : "bg-slate-300"
                } relative p-0.5`}
              >
                <div
                  className={`h-4 w-4 rounded-full bg-white transition-transform ${
                    serialTracking ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {serialTracking && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="rounded-md border border-primary/20 bg-primary/5 p-2.5 font-mono text-[0.68rem] text-primary-darker"
              >
                <span className="font-bold">Active IMEI Range Generated:</span>
                <br />
                #IMEI-864092019401... #IMEI-864092019410
              </motion.div>
            )}

            {/* Stock In Form */}
            <div className="rounded-lg border border-border bg-white p-3 space-y-2.5 shadow-xs">
              <div>
                <label className="text-[0.7rem] font-bold text-muted-foreground uppercase">Supplier Name</label>
                <input
                  type="text"
                  value={supplierName}
                  onChange={(e) => setSupplierName(e.target.value)}
                  className="mt-1 w-full rounded border border-border px-2.5 py-1.5 text-xs font-medium text-foreground focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[0.7rem] font-bold text-muted-foreground uppercase">
                  Units Received (Stock-In Qty)
                </label>
                <div className="mt-1 flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={stockInUnits}
                    onChange={(e) => setStockInUnits(Math.max(1, Number(e.target.value)))}
                    className="w-full rounded border border-border px-2.5 py-1.5 text-sm font-bold text-foreground focus:border-primary focus:outline-none"
                  />
                  <span className="text-xs font-semibold text-muted-foreground">{selectedProduct.unit}</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border pt-2 text-xs">
                <span className="text-muted-foreground">Supplier Payable Addition:</span>
                <span className="font-extrabold text-foreground">
                  +&#8377;{(selectedProduct.costPrice * stockInUnits).toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handleStockIn}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-xs font-bold text-white shadow-xs transition-all hover:bg-primary-dark"
            >
              <Truck className="h-4 w-4" /> Record Purchase &amp; Increment Stock (+{stockInUnits} {selectedProduct.unit})
            </button>

            <AnimatePresence>
              {showStockInSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-2.5 flex items-center justify-center gap-2 rounded-md bg-emerald-100 p-2 text-xs font-semibold text-emerald-800"
                >
                  <Check className="h-4 w-4" /> Stock incremented &amp; Supplier due updated in local SQLite DB!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
