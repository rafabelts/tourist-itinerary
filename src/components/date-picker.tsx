import { Calendar } from "lucide-react";

export default function DateRangePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  onContinue,
}: {
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
  onContinue?: () => void;
}) {
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newStartDate = e.target.value;
    setStartDate(newStartDate);

    if (endDate && newStartDate > endDate) {
      setEndDate("");
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setEndDate(e.target.value);
  };

  const handleClear = () => {
    setStartDate("");
    setEndDate("");
  };

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    } else {
      console.log("Fecha inicio:", formatDate(startDate));
      console.log("Fecha fin:", formatDate(endDate));
      alert(
        `Rango seleccionado:\nInicio: ${formatDate(startDate)}\nFin: ${formatDate(endDate)}`,
      );
    }
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div
          style={{
            background: "#2e2e2e",
            padding: "30px",
            borderRadius: "10px",
            boxShadow:
              "0 2px 6px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            color: "#f0f0f0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "30px",
            }}
          >
            <Calendar
              style={{ width: "32px", height: "32px", color: "#ff5722" }}
            />
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                margin: 0,
                color: "#f0f0f0",
              }}
            >
              Selector de Rango de Fechas
            </h1>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* Fecha de Inicio */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#f0f0f0",
                  marginBottom: "8px",
                }}
              >
                Fecha de Inicio
              </label>
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                min={getTodayDate()}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "#1a1a1a",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "6px",
                  color: "#f0f0f0",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                  colorScheme: "dark",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid #ff5722")}
                onBlur={(e) =>
                  (e.target.style.border = "1px solid rgba(255, 255, 255, 0.1)")
                }
              />
            </div>

            {/* Fecha de Fin */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#f0f0f0",
                  marginBottom: "8px",
                }}
              >
                Fecha de Fin
              </label>
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                min={startDate}
                disabled={!startDate}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: !startDate ? "#252525" : "#1a1a1a",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "6px",
                  color: !startDate ? "#666" : "#f0f0f0",
                  fontSize: "16px",
                  outline: "none",
                  cursor: !startDate ? "not-allowed" : "text",
                  boxSizing: "border-box",
                  colorScheme: "dark",
                }}
                onFocus={(e) =>
                  !e.target.disabled &&
                  (e.target.style.border = "1px solid #ff5722")
                }
                onBlur={(e) =>
                  (e.target.style.border = "1px solid rgba(255, 255, 255, 0.1)")
                }
              />
            </div>

            {/* Botones */}
            <div
              style={{ display: "flex", gap: "12px", flexDirection: "column" }}
            >
              {/* Botón Continuar */}
              {startDate && endDate && (
                <button
                  type="button"
                  onClick={handleContinue}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    background: "#ff5722",
                    border: "none",
                    borderRadius: "6px",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#e64a19")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#ff5722")
                  }
                >
                  Continuar
                </button>
              )}

              {/* Botón Limpiar */}
              {(startDate || endDate) && (
                <button
                  type="button"
                  onClick={handleClear}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    background: "#3a3a3a",
                    border: "none",
                    borderRadius: "6px",
                    color: "#f0f0f0",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#4a4a4a")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#3a3a3a")
                  }
                >
                  Limpiar Fechas
                </button>
              )}
            </div>

            {/* Resultados */}
            {startDate && endDate && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "24px",
                  background: "#3a3a3a",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 87, 34, 0.3)",
                }}
              >
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#f0f0f0",
                    marginBottom: "16px",
                    marginTop: 0,
                  }}
                >
                  Rango Seleccionado:
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "600",
                        color: "#f0f0f0",
                        minWidth: "120px",
                      }}
                    >
                      Fecha Inicio:
                    </span>
                    <code
                      style={{
                        padding: "6px 12px",
                        background: "#2e2e2e",
                        borderRadius: "4px",
                        color: "#ff5722",
                        fontFamily: "monospace",
                        fontSize: "14px",
                      }}
                    >
                      {formatDate(startDate)}
                    </code>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "600",
                        color: "#f0f0f0",
                        minWidth: "120px",
                      }}
                    >
                      Fecha Fin:
                    </span>
                    <code
                      style={{
                        padding: "6px 12px",
                        background: "#2e2e2e",
                        borderRadius: "4px",
                        color: "#ff5722",
                        fontFamily: "monospace",
                        fontSize: "14px",
                      }}
                    >
                      {formatDate(endDate)}
                    </code>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "600",
                        color: "#f0f0f0",
                        minWidth: "120px",
                      }}
                    >
                      Días totales:
                    </span>
                    <span style={{ color: "#f0f0f0" }}>
                      {Math.ceil(
                        (new Date(endDate).getTime() -
                          new Date(startDate).getTime()) /
                          (1000 * 60 * 60 * 24),
                      ) + 1}{" "}
                      días
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Mensaje de instrucción */}
            {!startDate && (
              <div
                style={{
                  textAlign: "center",
                  color: "#888",
                  fontSize: "14px",
                  marginTop: "8px",
                }}
              >
                Selecciona una fecha de inicio para comenzar
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
