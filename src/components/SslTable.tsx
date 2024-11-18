import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SslTable: React.FC<{ content: Record<string, any> }> = ({ content }) => {
  return (
    <div className="flex h-full flex-col break-words shadow-md p-4 rounded-lg cursor-default">
      {!content ? (
        <h1>No SSL certificate found.</h1>
      ) : (
        <table className="table">
          <tbody>
            <tr className="hover">
              <th>Issuer</th>
              <td>{content.issuer?.friendly_name}</td>
            </tr>
            <tr className="hover">
              <th>Covers</th>
              <td>
                <ul>
                  {content.dns_names?.map((dns: string, idx: number) => (
                    <li key={idx}>{dns}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr className="hover">
              <th>Issued On</th>
              <td>{new Date(content.not_before).toLocaleDateString()}</td>
            </tr>
            <tr className="hover">
              <th>Expires On</th>
              <td>{new Date(content.not_after).toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SslTable;