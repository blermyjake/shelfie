CREATE TABLE products (
    id integer DEFAULT nextval('"Products_id_seq"'::regclass) PRIMARY KEY,
    "product " text,
    price double precision,
    quantity integer
)
