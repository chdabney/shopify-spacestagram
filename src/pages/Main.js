import { useAxios } from "../api/api";

const { REACT_APP_API_KEY } = process.env;

const API_BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_API_KEY}&count=50`;

function Main() {
  const [result, error, isLoading] = useAxios(API_BASE_URL);

  console.log(result);

  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          <div>
            {result && (
              <div>
                {result.map((item) => (
                  <h1>{item.title}</h1>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
