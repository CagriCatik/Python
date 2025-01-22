# CRUD

## Overview

A REST API (Representational State Transfer Application Programming Interface) is a standardized architecture for building and interacting with web services. RESTful APIs rely on a stateless, client-server, and cacheable communication protocol, typically HTTP. This documentation provides a comprehensive guide on the primary HTTP methods used in REST APIs: **GET**, **POST**, **PUT**, **PATCH**, and **DELETE**.

- **Create** (typically associated with **POST**)
- **Read** (typically associated with **GET**)
- **Update** (typically associated with **PUT** or **PATCH**)
- **Delete** (typically associated with **DELETE**)

---

## 1. **GET: Retrieve Data from a Server**

**Purpose**:  
The `GET` method is used to retrieve data from a server. It requests data from a specified resource without making any modifications to the resource.

**Characteristics**:

- **Safe**: The `GET` method does not alter any server state. It is considered safe because it only retrieves data.
- **Idempotent**: Multiple identical `GET` requests will produce the same result and have no side effects.
- **Cacheable**: Responses to `GET` requests can be cached for improved performance.

**Usage**:

- Retrieving a list of resources (e.g., a list of users).
- Retrieving a specific resource by its ID (e.g., a single user by ID).
- Filtering and searching resources based on query parameters (e.g., filtering users by role or status).

**Example 1**: Retrieve all users

```http
GET /api/users HTTP/1.1
Host: example.com
```

_Response_:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "admin"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "role": "user"
  }
]
```

**Example 2**: Retrieve a specific user by ID

```http
GET /api/users/1 HTTP/1.1
Host: example.com
```

_Response_:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "admin",
  "created_at": "2024-08-01T10:20:30Z"
}
```

**Example 3**: Retrieve users filtered by role

```http
GET /api/users?role=admin HTTP/1.1
Host: example.com
```

_Response_:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "admin"
  }
]
```

---

## 2. **POST: Send New Data to the Server**

**Purpose**:  
The `POST` method is used to send new data to the server. It is often used to create a new resource on the server.

**Characteristics**:

- **Non-idempotent**: Multiple identical `POST` requests can result in the creation of multiple resources with different identifiers.
- **Not Cacheable**: Typically, `POST` requests are not cached as they alter the state of the server.

**Usage**:

- Creating a new resource (e.g., a new user or a new item in a list).
- Submitting data to be processed (e.g., form submissions, file uploads).
- Bulk creation of resources by sending an array of data objects.

**Example 1**: Create a new user

```http
POST /api/users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "SecurePassword123",
  "role": "user"
}
```

_Response_:

```json
{
  "id": 3,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "role": "user",
  "created_at": "2024-08-12T12:34:56Z"
}
```

**Example 2**: Bulk create users

```http
POST /api/users/bulk HTTP/1.1
Host: example.com
Content-Type: application/json

[
  {
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "password": "SecurePassword456",
    "role": "user"
  },
  {
    "name": "Bob Brown",
    "email": "bob.brown@example.com",
    "password": "SecurePassword789",
    "role": "user"
  }
]
```

_Response_:

```json
[
  {
    "id": 4,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "role": "user",
    "created_at": "2024-08-12T12:40:00Z"
  },
  {
    "id": 5,
    "name": "Bob Brown",
    "email": "bob.brown@example.com",
    "role": "user",
    "created_at": "2024-08-12T12:41:00Z"
  }
]
```

---

## 3. **PUT: Update Existing Data on the Server**

**Purpose**:  
The `PUT` method is used to update an existing resource on the server. It typically requires sending the entire resource payload, replacing the existing resource with the new one.

**Characteristics**:

- **Idempotent**: Multiple identical `PUT` requests will produce the same result.
- **May Not be Cacheable**: `PUT` requests may or may not be cacheable, depending on the implementation.

**Usage**:

- Updating an entire resource (e.g., changing the name and email of a user).
- Replacing a resource entirely (e.g., replacing all fields of a user).

**Example 1**: Update an existing user

```http
PUT /api/users/1 HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@newdomain.com",
  "role": "admin"
}
```

_Response_:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@newdomain.com",
  "role": "admin",
  "updated_at": "2024-08-12T13:45:00Z"
}
```

**Example 2**: Replace a user's details entirely

```http
PUT /api/users/2 HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane.doe@newdomain.com",
  "role": "user"
}
```

_Response_:

```json
{
  "id": 2,
  "name": "Jane Doe",
  "email": "jane.doe@newdomain.com",
  "role": "user",
  "updated_at": "2024-08-12T13:50:00Z"
}
```

---

## 4. **PATCH: Partially Update Data on the Server**

**Purpose**:  
The `PATCH` method is used to make partial updates to an existing resource. Unlike `PUT`, which replaces the entire resource, `PATCH` allows modifying specific fields.

**Characteristics**:

- **Idempotent**: Multiple identical `PATCH` requests will produce the same result.
- **May Not be Cacheable**: Similar to `PUT`, `PATCH` requests may or may not be cacheable.

**Usage**:

- Updating specific fields of a resource (e.g., only changing the user's email).
- Applying incremental updates (e.g., updating user status or adding tags).

**Example 1**: Partially update a user's email

```http
PATCH /api/users/1 HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "email": "john.doe@newdomain.com"
}
```

_Response_:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@newdomain.com",
  "role": "admin",
  "updated_at": "2024-08-12T14:56:00Z"
}
```

**Example 2**: Update a user's status

```http
PATCH /api/users/1/status HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "status": "inactive"
}
```

_Response_:

```json
{
  "id": 1,
  "name": "John Doe",
  "status": "inactive",
  "updated_at": "2024-08-12T15:00:00Z"
}
```

---

## 5. **DELETE: Remove Data from the Server**

**Purpose**:  
The `DELETE` method is used to remove a resource from the server. Once a resource is deleted, it is no longer available.

**Characteristics**:

- **Idempotent**: Multiple identical `DELETE` requests will produce the same result (deleting the resource).
- **Not Cacheable

**: `DELETE` requests are not cached because they alter the state of the server.

**Usage**:

- Removing a resource (e.g., deleting a user or an item).
- Bulk deletion of resources using query parameters (e.g., deleting all inactive users).

**Example 1**: Delete a specific user

```http
DELETE /api/users/1 HTTP/1.1
Host: example.com
```

_Response_:

```json
{
  "message": "User successfully deleted"
}
```

**Example 2**: Delete multiple users based on status

```http
DELETE /api/users?status=inactive HTTP/1.1
Host: example.com
```

_Response_:

```json
{
  "message": "Inactive users successfully deleted"
}
```