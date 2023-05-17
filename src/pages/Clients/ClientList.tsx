
function ClientList() {
  return (
    <>
      <div className="content container-fluid">
        <div className="tabel-header py-3">
          <div className="d-grid d-sm-flex gap-2">
            <button type="button" className="btn btn-primary">
              Add Client
            </button>
          </div>
        </div>

        <table className="table w-100 mb-4 main-table ">
          <thead>
            <th>Date</th>
            <th>Medication</th>
            <th>Indication</th>
            <th>Provider</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex align-items-center table_cell">
                  <div className="pl-3">
                    <p className="mb-0 font-bold">1 MAR, 2022</p>
                    <p className="mb-0">12:01 PM</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="table_cell">Crystal Solution 500ml</div>
              </td>
              <td>
                <div className="table_cell">Wether, Amalia</div>
              </td>
              <td>
                <div className="table_cell">
                  Take daily combination 1-0-0 (Topical)
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center table_cell">
                  <div className="pl-3">
                    <p className="mb-0 font-bold">1 MAR, 2022</p>
                    <p className="mb-0">12:01 PM</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="table_cell">Crystal Solution 500ml</div>
              </td>
              <td>
                <div className="table_cell">Wether, Amalia</div>
              </td>
              <td>
                <div className="table_cell">
                  Take daily combination 1-0-0 (Topical)
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ClientList;
