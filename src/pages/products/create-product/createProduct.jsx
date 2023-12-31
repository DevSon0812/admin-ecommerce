import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { addproduct } from "../../../feature/product/productSlice";
import {
  fetchCategories,
  selectCategories,
} from "../../../feature/category/sliceCategory";
import { useEffect } from "react";
const CreateProduct = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addproduct(data));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Create Product
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Product Name"
              fullWidth
              {...register("name", { required: "Product name is required" })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              {...register("description", {
                required: "Description is required",
              })}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Price"
              fullWidth
              type="number"
              {...register("price", { required: "Price is required" })}
              error={!!errors.price}
              helperText={errors.price?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="New Price"
              fullWidth
              type="number"
              {...register("newprice", { required: "New price is required" })}
              error={!!errors.newPrice}
              helperText={errors.newPrice?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Category"
              fullWidth
              select
              {...register("category", { required: "Category is required" })}
              error={!!errors.category}
              helperText={errors.category?.message}
            >
              {categories?.map((category) => (
                <MenuItem key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Image URL"
              fullWidth
              {...register("images", { required: "Image URL is required" })}
              error={!!errors.image}
              helperText={errors.image?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Stock"
              fullWidth
              type="number"
              {...register("stock", { required: "Stock quantity is required" })}
              error={!!errors.stock}
              helperText={errors.stock?.message}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Create Product
        </Button>
      </form>
    </Container>
  );
};

export default CreateProduct;
