using FluentValidation;

namespace Web.Models.Validators
{
    public class ItemValidator : AbstractValidator<Item>
    {
        public ItemValidator()
        {
            RuleFor(x => x.ItemNumber)
                .NotNull();
        }
    }
}